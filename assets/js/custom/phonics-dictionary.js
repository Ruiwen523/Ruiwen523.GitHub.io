(function () {
  const DEFAULT_DATA_SOURCE = '/assets/data/phonics-words.json';
  const MAX_RESULTS = 8;

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function normalizeText(value) {
    return String(value || '').trim().toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function resolveDataSource(source) {
    if (!source) {
      return DEFAULT_DATA_SOURCE;
    }

    if (/^(https?:)?\/\//.test(source) || source.startsWith('/')) {
      return source;
    }

    return new URL(source, document.baseURI).href;
  }

  function getWordsFromPayload(payload) {
    if (Array.isArray(payload)) {
      return payload;
    }

    if (payload && Array.isArray(payload.words)) {
      return payload.words;
    }

    return [];
  }

  function getSearchText(entry) {
    return normalizeText(
      [
        entry.word,
        entry.kk,
        entry.translation,
        entry.partOfSpeech,
        entry.level,
        entry.syllables,
        entry.stress,
        entry.mainVowel,
        entry.vowelPositions,
        entry.phonicsRule,
        entry.note,
        entry.example,
        Array.isArray(entry.tags) ? entry.tags.join(' ') : entry.tags
      ].join(' ')
    );
  }

  function findMatches(words, query) {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
      return words.slice(0, MAX_RESULTS);
    }

    return words
      .map((entry) => {
        const word = normalizeText(entry.word);
        const searchText = getSearchText(entry);
        let score = 0;

        if (word === normalizedQuery) {
          score += 100;
        } else if (word.startsWith(normalizedQuery)) {
          score += 60;
        } else if (word.includes(normalizedQuery)) {
          score += 35;
        }

        if (searchText.includes(normalizedQuery)) {
          score += 10;
        }

        return { entry, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }

        return String(a.entry.word).localeCompare(String(b.entry.word));
      })
      .slice(0, MAX_RESULTS)
      .map((item) => item.entry);
  }

  function renderField(label, value) {
    if (!value) {
      return '';
    }

    return `
      <div class="phonics-lookup-result__field">
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(value)}</dd>
      </div>
    `;
  }

  function renderEntry(entry) {
    const word = escapeHtml(entry.word);
    const speakWord = escapeHtml(entry.word);
    const tags = Array.isArray(entry.tags) ? entry.tags : [];
    const tagMarkup = tags
      .slice(0, 4)
      .map((tag) => `<span class="phonics-lookup-result__tag">${escapeHtml(tag)}</span>`)
      .join('');

    return `
      <article class="phonics-lookup-result">
        <header class="phonics-lookup-result__header">
          <div>
            <h3 class="phonics-lookup-result__word">
              <span>${word}</span>
              <button
                type="button"
                class="phonics-speak-button"
                data-phonics-speak="${speakWord}"
                title="播放英文發音"
                aria-label="播放英文發音：${speakWord}"
              >&#128266;</button>
            </h3>
            <p class="phonics-lookup-result__meta">
              <span>${escapeHtml(entry.kk)}</span>
              <span>${escapeHtml(entry.partOfSpeech)}</span>
              <span>${escapeHtml(entry.translation)}</span>
            </p>
          </div>
          ${tagMarkup ? `<div class="phonics-lookup-result__tags">${tagMarkup}</div>` : ''}
        </header>
        <dl class="phonics-lookup-result__grid">
          ${renderField('音節', entry.syllables)}
          ${renderField('重音', entry.stress)}
          ${renderField('母音位置', entry.vowelPositions || entry.mainVowel)}
          ${renderField('發音規則', entry.phonicsRule)}
          ${renderField('補充', entry.note)}
        </dl>
        ${
          entry.example
            ? `<p class="phonics-lookup-result__example">${escapeHtml(entry.example)}</p>`
            : ''
        }
      </article>
    `;
  }

  function renderResults(resultsElement, statusElement, matches, total, query) {
    if (!matches.length) {
      resultsElement.innerHTML = `
        <p class="phonics-lookup__empty">找不到「${escapeHtml(query)}」。可以新增到 <code>assets/data/phonics-words.json</code> 後再查詢。</p>
      `;
      statusElement.textContent = `0 / ${total}`;
      return;
    }

    resultsElement.innerHTML = matches.map(renderEntry).join('');
    statusElement.textContent = query
      ? `${matches.length} / ${total}`
      : `顯示前 ${matches.length} 筆，總詞庫 ${total} 筆`;
  }

  function speak(text, button) {
    if (!text || !window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.88;

    button.classList.add('is-speaking');
    utterance.onend = () => button.classList.remove('is-speaking');
    utterance.onerror = () => button.classList.remove('is-speaking');

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  async function initializeDictionary(root) {
    const input = root.querySelector('[data-phonics-search]');
    const clearButton = root.querySelector('[data-phonics-clear]');
    const resultsElement = root.querySelector('[data-phonics-results]');
    const statusElement = root.querySelector('[data-phonics-status]');

    if (!input || !resultsElement || !statusElement) {
      return;
    }

    statusElement.textContent = '載入內建詞庫中...';

    try {
      const response = await fetch(resolveDataSource(root.dataset.source), {
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      const words = getWordsFromPayload(payload)
        .filter((entry) => entry && entry.word)
        .sort((a, b) => String(a.word).localeCompare(String(b.word)));

      const updateResults = () => {
        const query = input.value.trim();
        renderResults(
          resultsElement,
          statusElement,
          findMatches(words, query),
          words.length,
          query
        );
      };

      input.addEventListener('input', updateResults);

      if (clearButton) {
        clearButton.addEventListener('click', () => {
          input.value = '';
          input.focus();
          updateResults();
        });
      }

      root.addEventListener('click', (event) => {
        const button = event.target.closest('[data-phonics-speak]');

        if (button) {
          speak(button.dataset.phonicsSpeak, button);
        }
      });

      updateResults();
    } catch (error) {
      statusElement.textContent = '內建詞庫載入失敗';
      resultsElement.innerHTML = `
        <p class="phonics-lookup__empty">請確認 <code>assets/data/phonics-words.json</code> 存在且 JSON 格式正確。</p>
      `;
    }
  }

  onReady(() => {
    document
      .querySelectorAll('[data-phonics-dictionary]')
      .forEach(initializeDictionary);
  });
})();
