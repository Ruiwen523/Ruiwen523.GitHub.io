---
title: "英文自然發音與 KK 音標教學：從拼字規則到嘴型練習"
author: ruiwen
date: 2026-06-02 00:00:00 +0800
last_modified_at: 2026-06-07 00:00:00 +0800
categories: [Blogging, Tutorial]
tags: [English, Phonics, KK, Pronunciation]
render_with_liquid: false
custom_css:
  - /assets/css/custom/phonics-dictionary.css
custom_js:
  - /assets/js/custom/phonics-dictionary.js
---

## 英文自然發音與 KK 音標教學

英文發音可以分成兩個互補工具：

- **自然發音 Phonics**：看到拼字時，根據字母和字母組合推測讀音。
- **KK 音標**：查字典時，用音標確認實際讀音、重音和例外。

簡單說，自然發音幫你「先猜」，KK 音標幫你「確認」。英文拼字有很多規則，但也有很多例外，所以最穩的學習方式不是只背規則，而是把 **拼字、音標、嘴型、例句** 一起練。

本文用方括號表示 KK 音標，例如 `cat [kæt]`、`teacher [ˋtitʃɚ]`。不同字典的重音符號位置可能略有差異，重點是先聽出母音、子音和重音。

本文中的英文字詞與例句旁會出現發音按鈕。按鈕使用瀏覽器內建的 Web Speech API 朗讀英文，不需要額外音檔。

<style>
  .phonics-speak-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.55em;
    height: 1.55em;
    margin-left: 0.25rem;
    border: 1px solid var(--main-border-color, #d7d7d7);
    border-radius: 999px;
    background: var(--card-bg, #fff);
    color: var(--link-color, #2a7ae2);
    font-size: 0.78em;
    line-height: 1;
    cursor: pointer;
    vertical-align: middle;
  }

  .phonics-speak-button:hover {
    color: var(--link-hover-color, #0056b3);
    border-color: currentColor;
  }

  .phonics-speak-button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  .phonics-speak-button.phonics-speak-block {
    margin-top: 0.35rem;
    margin-bottom: 1rem;
  }
</style>

<script>
  (function () {
    function isKkOnlyText(text) {
      var compact = text.trim();

      if (!compact) {
        return true;
      }

      var withoutKk = compact
        .replace(/\[[^\]]+\]/g, "")
        .replace(/\bvs\b/gi, "")
        .replace(/[\/+、，,;；:：和\s]/g, "")
        .trim();

      return withoutKk.length === 0;
    }

    function getTableHeaderText(code) {
      var cell = code.closest("td, th");

      if (!cell) {
        return "";
      }

      var row = cell.parentElement;
      var table = cell.closest("table");

      if (!row || !table) {
        return "";
      }

      var cellIndex = Array.prototype.indexOf.call(row.children, cell);
      var headerRow = table.querySelector("thead tr") || table.querySelector("tr");

      if (!headerRow || !headerRow.children[cellIndex]) {
        return "";
      }

      return headerRow.children[cellIndex].textContent.trim();
    }

    function shouldSkipCode(code) {
      var rawText = code.textContent.trim();
      var headerText = getTableHeaderText(code);

      if (isKkOnlyText(rawText)) {
        return true;
      }

      return /^(KK|英文字母|拼字|來源字母|來源字母\/字母組合|子音組合|短音來源字母|長音來源字母\/組合|對比)$/.test(headerText);
    }

    function extractSpeechText(text) {
      return text
        .replace(/\[[^\]]+\]/g, " ")
        .replace(/[ˋˊ]/g, " ")
        .replace(/_/g, " ")
        .split(/\n/)
        .map(function (line) {
          return line
            .replace(/^\s*\d+\.\s*/, "")
            .replace(/[^A-Za-z\s.,?!'/-]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
        })
        .filter(Boolean)
        .join(". ");
    }

    function createSpeakButton(rawText) {
      var speechText = extractSpeechText(rawText);

      if (!speechText || !/[A-Za-z]/.test(speechText)) {
        return null;
      }

      var button = document.createElement("button");
      button.type = "button";
      button.className = "phonics-speak-button";
      button.title = "播放英文發音";
      button.setAttribute("aria-label", "播放英文發音：" + speechText);
      button.dataset.speak = speechText;
      button.innerHTML = "&#128266;";

      button.addEventListener("click", function () {
        var utterance = new SpeechSynthesisUtterance(this.dataset.speak);
        utterance.lang = "en-US";
        utterance.rate = 0.88;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      });

      return button;
    }

    document.addEventListener("DOMContentLoaded", function () {
      if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
        return;
      }

      var root = document.querySelector(".post-content") ||
        document.querySelector("article") ||
        document.querySelector("main") ||
        document.body;

      root.querySelectorAll("code").forEach(function (code) {
        if (shouldSkipCode(code)) {
          return;
        }

        var button = createSpeakButton(code.textContent);

        if (!button) {
          return;
        }

        if (code.parentElement && code.parentElement.tagName === "PRE") {
          button.classList.add("phonics-speak-block");
          code.parentElement.insertAdjacentElement("afterend", button);
        } else {
          code.insertAdjacentElement("afterend", button);
        }
      });
    });
  })();
</script>

## KK 單字查詢器

輸入英文單字後，按下搜尋即可查看 KK 音標、音節、母音位置與套用到的自然發音規則。發音按鈕使用瀏覽器內建語音播放英文讀音。

<div class="kk-lookup" id="kk-lookup">
  <form class="kk-lookup__form" id="kk-lookup-form">
    <label class="kk-lookup__label" for="kk-lookup-word">英文單字</label>
    <div class="kk-lookup__search">
      <input id="kk-lookup-word" class="kk-lookup__input" type="text" inputmode="latin" autocomplete="off" spellcheck="false" placeholder="例如：supervisor" value="supervisor">
      <button class="kk-lookup__button" type="submit">搜尋</button>
    </div>
  </form>

  <div class="kk-lookup__result" id="kk-lookup-result" aria-live="polite"></div>
</div>

<style>
  .kk-lookup {
    margin: 1.5rem 0;
    padding: 1rem;
    border: 1px solid var(--main-border-color, #d7d7d7);
    border-radius: 8px;
    background: var(--card-bg, #fff);
  }

  .kk-lookup__form {
    display: grid;
    gap: 0.55rem;
    margin: 0;
  }

  .kk-lookup__label {
    font-weight: 700;
  }

  .kk-lookup__search {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.5rem;
  }

  .kk-lookup__input,
  .kk-lookup__button {
    min-height: 2.5rem;
    border-radius: 6px;
    font: inherit;
  }

  .kk-lookup__input {
    width: 100%;
    border: 1px solid var(--main-border-color, #d7d7d7);
    padding: 0.45rem 0.7rem;
    background: var(--card-bg, #fff);
    color: var(--text-color, #333);
  }

  .kk-lookup__button,
  .kk-lookup__sound {
    border: 1px solid var(--link-color, #2a7ae2);
    background: var(--link-color, #2a7ae2);
    color: #fff;
    cursor: pointer;
  }

  .kk-lookup__button {
    padding: 0 0.9rem;
    font-weight: 700;
  }

  .kk-lookup__button:hover,
  .kk-lookup__sound:hover {
    background: var(--link-hover-color, #0056b3);
    border-color: var(--link-hover-color, #0056b3);
  }

  .kk-lookup__result {
    margin-top: 1rem;
  }

  .kk-lookup__empty {
    margin: 0;
    color: var(--text-muted-color, #6c757d);
  }

  .kk-lookup__head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }

  .kk-lookup__word {
    margin: 0;
    font-size: 1.35rem;
    line-height: 1.25;
  }

  .kk-lookup__kk {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--link-color, #2a7ae2);
  }

  .kk-lookup__sound {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    line-height: 1;
  }

  .kk-lookup__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .kk-lookup__panel {
    border: 1px solid var(--main-border-color, #d7d7d7);
    border-radius: 8px;
    padding: 0.75rem;
    min-width: 0;
  }

  .kk-lookup__panel-title {
    margin: 0 0 0.45rem;
    font-weight: 700;
  }

  .kk-lookup__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .kk-lookup__chip {
    border: 1px solid var(--main-border-color, #d7d7d7);
    border-radius: 999px;
    padding: 0.16rem 0.55rem;
    background: rgba(42, 122, 226, 0.08);
    font-size: 0.92rem;
  }

  .kk-lookup__list {
    margin: 0;
    padding-left: 1.2rem;
  }

  .kk-lookup__note {
    margin: 0.8rem 0 0;
    color: var(--text-muted-color, #6c757d);
    font-size: 0.92rem;
  }

  @media (max-width: 576px) {
    .kk-lookup__search,
    .kk-lookup__grid {
      grid-template-columns: 1fr;
    }

    .kk-lookup__button {
      width: 100%;
    }
  }
</style>

<script>
  (function () {
    var lexicon = {
      supervisor: {
        kk: "[ˋsupɚˏvaɪzɚ]",
        syllables: ["su", "per", "vi", "sor"],
        rules: [
          "u -> [u]：第一音節為長母音 /u/。",
          "er -> [ɚ]：r-controlled 母音。",
          "i -> [aɪ]：vi 在此字中讀成長 i 的雙母音。",
          "or -> [ɚ]：非重音字尾弱化為 r-colored schwa。"
        ],
        note: "此字有 4 個書寫母音 u、e、i、o；實際發音為 4 個母音核心。不是規則型 o_e 或 i_o，而是詞彙重音與 r-controlled 的組合。"
      },
      teacher: {
        kk: "[ˋtitʃɚ]",
        syllables: ["teach", "er"],
        rules: ["ea -> [i]：長 e。", "ch -> [tʃ]：子音組合。", "er -> [ɚ]：字尾 r-controlled。"]
      },
      cat: {
        kk: "[kæt]",
        syllables: ["cat"],
        rules: ["a -> [æ]：CVC 短母音。"]
      },
      cake: {
        kk: "[kek]",
        syllables: ["cake"],
        rules: ["a_e -> [e]：silent e 讓 a 讀長母音。"]
      },
      sit: {
        kk: "[sɪt]",
        syllables: ["sit"],
        rules: ["i -> [ɪ]：CVC 短母音。"]
      },
      seat: {
        kk: "[sit]",
        syllables: ["seat"],
        rules: ["ea -> [i]：長 e。"]
      },
      hope: {
        kk: "[hop]",
        syllables: ["hope"],
        rules: ["o_e -> [o]：silent e 讓 o 讀長母音。"]
      },
      phone: {
        kk: "[fon]",
        syllables: ["phone"],
        rules: ["ph -> [f]：子音組合。", "o_e -> [o]：silent e 長母音。"]
      },
      book: {
        kk: "[bʊk]",
        syllables: ["book"],
        rules: ["oo -> [ʊ]：短 oo。"]
      },
      food: {
        kk: "[fud]",
        syllables: ["food"],
        rules: ["oo -> [u]：長 oo。"]
      }
    };

    var vowelLetters = "aeiouy";
    var rulePatterns = [
      { pattern: "eigh", kk: "e", label: "eigh -> [e]：長 a。" },
      { pattern: "igh", kk: "aɪ", label: "igh -> [aɪ]：長 i。" },
      { pattern: "ai", kk: "e", label: "ai -> [e]：長 a。" },
      { pattern: "ay", kk: "e", label: "ay -> [e]：長 a。" },
      { pattern: "ee", kk: "i", label: "ee -> [i]：長 e。" },
      { pattern: "ea", kk: "i", label: "ea -> [i]：常見長 e。" },
      { pattern: "oa", kk: "o", label: "oa -> [o]：長 o。" },
      { pattern: "ow", kk: "o", label: "ow -> [o]：可讀長 o。" },
      { pattern: "ou", kk: "aʊ", label: "ou -> [aʊ]：雙母音。" },
      { pattern: "oy", kk: "ɔɪ", label: "oy -> [ɔɪ]：雙母音。" },
      { pattern: "oi", kk: "ɔɪ", label: "oi -> [ɔɪ]：雙母音。" },
      { pattern: "oo", kk: "u", label: "oo -> [u]/[ʊ]：需依單字確認。" },
      { pattern: "ar", kk: "ɑr", label: "ar -> [ɑr]：r-controlled。" },
      { pattern: "er", kk: "ɚ", label: "er -> [ɚ]：r-controlled。" },
      { pattern: "ir", kk: "ɚ", label: "ir -> [ɚ]：r-controlled。" },
      { pattern: "ur", kk: "ɚ", label: "ur -> [ɚ]：r-controlled。" },
      { pattern: "or", kk: "ɔr", label: "or -> [ɔr]/[ɚ]：r-controlled，非重音時常弱化。" },
      { pattern: "sh", kk: "ʃ", label: "sh -> [ʃ]：子音組合。" },
      { pattern: "ch", kk: "tʃ", label: "ch -> [tʃ]：子音組合。" },
      { pattern: "th", kk: "θ", label: "th -> [θ]/[ð]：需依單字確認清音或濁音。" },
      { pattern: "ph", kk: "f", label: "ph -> [f]：子音組合。" },
      { pattern: "ng", kk: "ŋ", label: "ng -> [ŋ]：鼻音。" },
      { pattern: "ck", kk: "k", label: "ck -> [k]：子音組合。" }
    ];

    var consonantKk = {
      b: "b", c: "k", d: "d", f: "f", g: "g", h: "h", j: "dʒ", k: "k", l: "l",
      m: "m", n: "n", p: "p", q: "kw", r: "r", s: "s", t: "t", v: "v", w: "w",
      x: "ks", y: "j", z: "z"
    };
    var shortVowels = { a: "æ", e: "ɛ", i: "ɪ", o: "ɑ", u: "ʌ", y: "ɪ" };
    var longVowels = { a: "e", e: "i", i: "aɪ", o: "o", u: "ju" };

    function cleanWord(value) {
      return value.toLowerCase().replace(/[^a-z]/g, "");
    }

    function findVowels(word) {
      var matches = [];
      for (var i = 0; i < word.length; i += 1) {
        if (vowelLetters.indexOf(word[i]) !== -1) {
          matches.push({ letter: word[i], position: i + 1 });
        }
      }
      return matches;
    }

    function hasSilentE(word) {
      return word.length > 3 && /[aeiou][^aeiou]e$/.test(word);
    }

    function syllabify(word) {
      var parts = [];
      var start = 0;
      var groups = [];
      var match;
      var regex = /[aeiouy]+/g;

      while ((match = regex.exec(word)) !== null) {
        if (match[0] === "e" && match.index === word.length - 1 && hasSilentE(word)) {
          continue;
        }
        groups.push({ start: match.index, end: match.index + match[0].length });
      }

      if (groups.length <= 1) {
        return [word];
      }

      for (var i = 0; i < groups.length - 1; i += 1) {
        var between = word.slice(groups[i].end, groups[i + 1].start);
        var cut = groups[i].end + Math.max(0, between.length - 1);
        parts.push(word.slice(start, cut));
        start = cut;
      }

      parts.push(word.slice(start));
      return parts.filter(Boolean);
    }

    function addUnique(list, value) {
      if (list.indexOf(value) === -1) {
        list.push(value);
      }
    }

    function detectRules(word) {
      var rules = [];

      rulePatterns.forEach(function (item) {
        if (word.indexOf(item.pattern) !== -1) {
          addUnique(rules, item.label);
        }
      });

      if (hasSilentE(word)) {
        var vowel = word.match(/[aeiou](?=[^aeiou]e$)/);
        if (vowel) {
          addUnique(rules, vowel[0] + "_e -> [" + longVowels[vowel[0]] + "]：silent e 長母音。");
        }
      }

      findVowels(word).forEach(function (item) {
        var nextTwo = word.slice(item.position - 1, item.position + 1);
        var hasKnownPair = rulePatterns.some(function (rule) {
          return nextTwo.indexOf(rule.pattern) === 0;
        });

        if (!hasSilentE(word) && !hasKnownPair) {
          addUnique(rules, item.letter + " -> [" + shortVowels[item.letter] + "]：短母音推估。");
        }
      });

      return rules.length ? rules : ["未偵測到明確規則，建議搭配字典確認。"];
    }

    function estimateKk(word) {
      var output = "";
      var i = 0;

      while (i < word.length) {
        var matched = null;

        for (var len = 4; len >= 2; len -= 1) {
          var chunk = word.slice(i, i + len);
          matched = rulePatterns.find(function (item) { return item.pattern === chunk; });
          if (matched) {
            output += matched.kk;
            i += len;
            break;
          }
        }

        if (matched) {
          continue;
        }

        if (word[i] === "e" && i === word.length - 1 && hasSilentE(word)) {
          i += 1;
          continue;
        }

        if (vowelLetters.indexOf(word[i]) !== -1) {
          output += hasSilentE(word) && i < word.length - 2 ? (longVowels[word[i]] || shortVowels[word[i]]) : shortVowels[word[i]];
        } else {
          output += consonantKk[word[i]] || word[i];
        }

        i += 1;
      }

      return "[" + output + "]";
    }

    function analyze(word) {
      var known = lexicon[word];
      return {
        word: word,
        kk: known ? known.kk : estimateKk(word),
        syllables: known ? known.syllables : syllabify(word),
        vowels: findVowels(word),
        rules: known ? known.rules : detectRules(word),
        note: known && known.note ? known.note : "未收錄於內建詞庫時，KK 會以自然發音規則推估；實際讀音仍建議以字典為準。"
      };
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, function (char) {
        return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char];
      });
    }

    function renderList(items) {
      return items.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("");
    }

    function renderChips(items) {
      return items.map(function (item) {
        return "<li class=\"kk-lookup__chip\">" + escapeHtml(item) + "</li>";
      }).join("");
    }

    function render(result) {
      var vowelLabels = result.vowels.map(function (item) {
        return item.letter + "：第 " + item.position + " 個字母";
      });

      return [
        "<div class=\"kk-lookup__head\">",
        "<h3 class=\"kk-lookup__word\">" + escapeHtml(result.word) + "</h3>",
        "<span class=\"kk-lookup__kk\">" + escapeHtml(result.kk) + "</span>",
        "<button class=\"kk-lookup__sound\" type=\"button\" title=\"播放發音\" aria-label=\"播放 " + escapeHtml(result.word) + " 的發音\" data-kk-speak=\"" + escapeHtml(result.word) + "\">&#128266;</button>",
        "</div>",
        "<div class=\"kk-lookup__grid\">",
        "<section class=\"kk-lookup__panel\"><p class=\"kk-lookup__panel-title\">音節</p><ul class=\"kk-lookup__chips\">" + renderChips(result.syllables) + "</ul></section>",
        "<section class=\"kk-lookup__panel\"><p class=\"kk-lookup__panel-title\">母音位置（" + result.vowels.length + " 個）</p><ul class=\"kk-lookup__chips\">" + renderChips(vowelLabels) + "</ul></section>",
        "<section class=\"kk-lookup__panel\"><p class=\"kk-lookup__panel-title\">發音規則（" + result.rules.length + " 種）</p><ol class=\"kk-lookup__list\">" + renderList(result.rules) + "</ol></section>",
        "<section class=\"kk-lookup__panel\"><p class=\"kk-lookup__panel-title\">補充</p><p class=\"kk-lookup__empty\">" + escapeHtml(result.note) + "</p></section>",
        "</div>"
      ].join("");
    }

    function speak(word) {
      if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
        return;
      }

      var utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.86;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }

    document.addEventListener("DOMContentLoaded", function () {
      var form = document.getElementById("kk-lookup-form");
      var input = document.getElementById("kk-lookup-word");
      var output = document.getElementById("kk-lookup-result");

      if (!form || !input || !output) {
        return;
      }

      function runLookup() {
        var word = cleanWord(input.value);

        if (!word) {
          output.innerHTML = "<p class=\"kk-lookup__empty\">請輸入一個英文單字。</p>";
          return;
        }

        output.innerHTML = render(analyze(word));
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        runLookup();
      });

      output.addEventListener("click", function (event) {
        var button = event.target.closest("[data-kk-speak]");
        if (button) {
          speak(button.dataset.kkSpeak);
        }
      });

      runLookup();
    });
  })();
</script>

---

## 快速查詢內建詞庫

快速查詢單字時，先看最能幫助發音判斷的欄位即可：**音節、重音、母音位置、發音規則、補充**。如果要確認完整讀音，再搭配 KK 音標和例句。

下面的查詢工具讀取 `assets/data/phonics-words.json`。目前先放入一組可擴充的核心示範詞庫，之後可以把自建的多益核心單字逐筆加入同一份 JSON。

<section class="phonics-lookup" data-phonics-dictionary data-source="/assets/data/phonics-words.json">
  <div class="phonics-lookup__bar">
    <div class="phonics-lookup__field">
      <label class="phonics-lookup__label" for="phonicsLookupInput">輸入英文單字</label>
      <input
        class="phonics-lookup__input"
        id="phonicsLookupInput"
        type="search"
        placeholder="例如：ability、computer、through"
        autocomplete="off"
        data-phonics-search
      >
    </div>
    <button class="phonics-lookup__clear" type="button" data-phonics-clear>清除</button>
  </div>
  <p class="phonics-lookup__status" data-phonics-status>載入內建詞庫中...</p>
  <div class="phonics-lookup__results" data-phonics-results></div>
</section>

---

## 學習順序

建議依照下面的順序練：

1. 先認識 26 個字母的常見發音。
2. 練短母音和基本 CVC 單字，例如 `cat`、`bed`、`sit`。
3. 練長母音規則，例如 silent e：`cap` 變 `cape`。
4. 練常見字母組合，例如 `sh`、`ch`、`th`、`ea`、`oa`、`oo`。
5. 用 KK 音標確認母音差異，例如 `[i]` 和 `[ɪ]`。
6. 練嘴型、口角、舌位和氣流。
7. 放進句子，用朗讀、跟讀、錄音修正。

---

## 自然發音和 KK 音標的差異

| 工具 | 主要用途 | 優點 | 限制 | 範例 | 來源字母/字母組合 |
| ---- | -------- | ---- | ---- | ---- | ------------------ |
| 自然發音 | 從拼字推測發音 | 適合看到新字先讀出來 | 英文例外很多 | `cake` 的 `a_e` 常讀 `[e]` | `a_e` |
| KK 音標 | 從字典確認發音 | 可以精準看出母音和子音 | 需要先熟悉符號 | `sit [sɪt]`、`seat [sit]` | `sit` 的 `i`；`seat` 的 `ea` |

### 對照例子

| 英文字母 | 單字 | 自然發音觀察 | KK 音標 | 來源字母/字母組合 | 中文 |
| -------- | ---- | ------------ | ------- | ------------------ | ---- |
| E + A | `team` | `ea` 常讀長母音 | `[tim]` | `ea` -> `[i]` | 隊伍 |
| E + A | `bread` | `ea` 在這裡不讀 `[i]` | `[brɛd]` | `ea` -> `[ɛ]` | 麵包 |
| E + A | `great` | `ea` 在這裡接近 `[e]` | `[gret]` | `ea` -> `[e]` | 很棒的 |
| E / O / G + H | `enough` | `gh` 在字尾讀 `[f]` | `[ɪˋnʌf]` | `e` -> `[ɪ]`；`ou` -> `[ʌ]`；`gh` -> `[f]` | 足夠的 |
| T + H / O + U + G + H | `through` | `gh` 不發音 | `[θru]` | `th` -> `[θ]`；`ou` -> `[u]`；`gh` 不發音 | 穿過 |

口訣：**自然發音先判斷，KK 音標來校正。**

---

## 發音器官快速認識

練發音時，不要只看字母，要注意嘴巴的動作。

| 部位 | 作用 | 練習重點 |
| ---- | ---- | -------- |
| 嘴唇 | 決定圓唇、閉唇、摩擦音 | `[p]`、`[b]` 要閉唇；`[u]`、`[w]` 要圓唇 |
| 口角 | 決定嘴角拉開或放鬆 | `[i]` 嘴角拉開；`[ʊ]`、`[u]` 嘴唇收圓 |
| 舌尖 | 影響 `[t]`、`[d]`、`[l]`、`[r]` | `[l]` 舌尖碰上齒齦；`[r]` 舌頭不要碰上顎 |
| 舌面 | 影響母音高低與前後 | `[i]` 舌位高且前；`[ɑ]` 舌位低且後 |
| 牙齒 | 影響 `[θ]`、`[ð]` | 舌尖輕放上下齒之間，不要咬太用力 |
| 喉嚨 | 決定有聲或無聲 | `[s]` 無聲；`[z]` 有聲，喉嚨會震動 |

---

## KK 母音總表

母音是英文發音最容易混淆的地方。練母音時，要同時注意三件事：

- 嘴巴開多大。
- 舌頭在前面或後面。
- 嘴角拉開、放鬆，或嘴唇收圓。

| 英文字母 | KK | 來源字母/字母組合 | 例字 | 嘴型與口角 | 發音提醒 |
| -------- | -- | ------------------ | ---- | ---------- | -------- |
| E | `[i]` | `ea`、`ee`、`e` | `seat [sit]` | 嘴角拉開，舌頭高且靠前 | 像很清楚的「衣」，不要變短 |
| I | `[ɪ]` | `i` | `sit [sɪt]` | 嘴角放鬆，舌頭略低 | 短促、放鬆，不要唸成 `[i]` |
| A | `[e]` | `a_e`、`ai`、`ay` | `cake [kek]` | 嘴巴半閉，嘴角微拉 | 常見於長母音 a 的拼字 |
| E | `[ɛ]` | `e`、`ea` | `bed [bɛd]` | 嘴巴半開，口角自然 | 比 `[e]` 更開，像短促的「欸」 |
| A | `[æ]` | `a` | `cat [kæt]` | 嘴巴張大，嘴角平開，下巴放下 | 不要唸成中文「ㄟ」 |
| O | `[ɑ]` | `o`、`a` | `hot [hɑt]` | 嘴巴打開，舌頭低且後 | 聲音往後放，嘴巴不要太小 |
| O / A | `[ɔ]` | `aw`、`au`、`al` | `law [lɔ]` | 嘴唇微圓，舌頭偏後 | 像較圓的「喔」 |
| O | `[o]` | `o_e`、`oa`、`ow` | `go [go]` | 嘴唇收圓，結尾更緊 | 常見於長母音 o 的拼字 |
| U / O | `[ʊ]` | `oo`、`u` | `book [bʊk]` | 嘴唇微圓但放鬆 | 短促，不要拉成 `[u]` |
| U / O | `[u]` | `oo`、`u_e`、`ue` | `food [fud]` | 嘴唇更圓，舌頭高且後 | 聲音較長、較緊 |
| U | `[ʌ]` | `u`、`o`、`ou` | `cup [kʌp]` | 嘴巴自然打開，舌頭中央 | 短促放鬆，不要唸成「啊」太滿 |
| A / E / O | `[ə]` | 非重音的 `a`、`e`、`o` | `about [əˋbaʊt]` | 嘴巴最放鬆 | 非重音常見，聲音很輕 |
| R | `[ɝ]` | `ir`、`er`、`ur`、`ear` | `bird [bɝd]` | 嘴唇微收，舌頭捲或舌面後縮 | 重音的 r 色彩母音 |
| R | `[ɚ]` | 字尾 `er`、`or`、`ar` | `teacher [ˋtitʃɚ]` | 比 `[ɝ]` 輕，常在字尾 | 非重音的 r 色彩母音 |

### 雙母音

| 英文字母 | KK | 來源字母/字母組合 | 例字 | 嘴型變化 | 例句與翻譯 |
| -------- | -- | ------------------ | ---- | -------- | ---------- |
| I / Y | `[aɪ]` | `i_e`、`igh`、`y` | `time [taɪm]` | 從大開口滑到 `[ɪ]` | `I need more time.` 我需要更多時間。 |
| O / W | `[aʊ]` | `ou`、`ow` | `house [haʊs]` | 從大開口滑到圓唇 | `The house is small.` 這棟房子很小。 |
| O / Y | `[ɔɪ]` | `oi`、`oy` | `boy [bɔɪ]` | 從圓唇滑到 `[ɪ]` | `The boy is reading.` 那個男孩正在閱讀。 |

口訣：**母音看嘴型，短音快收尾，雙母音要滑動。**

---

## 短母音：CVC 基礎規則

CVC 是 consonant-vowel-consonant，也就是「子音 + 母音 + 子音」。這類單字中間的母音通常讀短母音。

| 英文字母 | 拼字 | KK | 來源字母 | 例字 | 例句 | 中文翻譯 |
| -------- | ---- | -- | -------- | ---- | ---- | -------- |
| A | `a` | `[æ]` | `a` | `cat [kæt]` | `The cat is on the mat.` | 貓在墊子上。 |
| E | `e` | `[ɛ]` | `e` | `bed [bɛd]` | `I make my bed every morning.` | 我每天早上整理床鋪。 |
| I | `i` | `[ɪ]` | `i` | `sit [sɪt]` | `Please sit down.` | 請坐下。 |
| O | `o` | `[ɑ]` | `o` | `hot [hɑt]` | `The soup is hot.` | 湯很熱。 |
| U | `u` | `[ʌ]` | `u` | `cup [kʌp]` | `This cup is clean.` | 這個杯子是乾淨的。 |

### 練習方式

先不要急著唸快。每個字都拆成三拍：

```text
c + a + t
[k] + [æ] + [t]
cat [kæt]
```

再放進句子：

```text
The cat is on the mat.
貓在墊子上。
```

---

## 長母音：silent e 規則

當單字結尾有不發音的 `e`，前面的母音常常讀「長母音」，也就是接近字母本身的名字。

| 英文字母 | 短母音 | 短音 KK | 短音來源字母 | 長母音 | 長音 KK | 長音來源字母/組合 | 中文 |
| -------- | ------ | ------- | ------------ | ------ | ------- | ------------------ | ---- |
| A | `cap` | `[kæp]` | `a` | `cape` | `[kep]` | `a_e` | 帽子 / 披肩 |
| I | `kit` | `[kɪt]` | `i` | `kite` | `[kaɪt]` | `i_e` | 工具包 / 風箏 |
| O | `hop` | `[hɑp]` | `o` | `hope` | `[hop]` | `o_e` | 跳 / 希望 |
| U | `cub` | `[kʌb]` | `u` | `cube` | `[kjub]` | `u_e` | 幼獸 / 立方體 |

### 例句

```text
I hope you are well.
我希望你一切都好。

The kite is in the sky.
風箏在天空中。

She wears a red cape.
她穿著紅色披肩。
```

口訣：**字尾 e 不出聲，前面母音喊名字。**

---

## 常見母音字母組合

英文母音組合很多，先掌握高頻組合，再慢慢處理例外。

| 英文字母 | 拼字 | 常見 KK | 來源字母/字母組合 | 例字 | 例句 | 中文翻譯 |
| -------- | ---- | ------- | ------------------ | ---- | ---- | -------- |
| A + I | `ai` | `[e]` | `ai` | `rain [ren]` | `It may rain today.` | 今天可能會下雨。 |
| A + Y | `ay` | `[e]` | `ay` | `day [de]` | `Have a nice day.` | 祝你有美好的一天。 |
| E + E | `ee` | `[i]` | `ee` | `see [si]` | `I can see the moon.` | 我看得到月亮。 |
| E + A | `ea` | `[i]` | `ea` | `team [tim]` | `Our team works hard.` | 我們的團隊很努力。 |
| O + A | `oa` | `[o]` | `oa` | `boat [bot]` | `The boat is near the lake.` | 船在湖邊附近。 |
| O + W | `ow` | `[o]` | `ow` | `snow [sno]` | `Snow falls in winter.` | 冬天會下雪。 |
| O + U | `ou` | `[aʊ]` | `ou` | `out [aʊt]` | `Let's go out.` | 我們出去吧。 |
| O + I | `oi` | `[ɔɪ]` | `oi` | `coin [kɔɪn]` | `I found a coin.` | 我找到一枚硬幣。 |
| O + Y | `oy` | `[ɔɪ]` | `oy` | `toy [tɔɪ]` | `The toy is new.` | 這個玩具是新的。 |
| O + O | `oo` | `[u]` | `oo` | `moon [mun]` | `The moon is bright.` | 月亮很亮。 |
| O + O | `oo` | `[ʊ]` | `oo` | `book [bʊk]` | `This book is useful.` | 這本書很有用。 |

注意：同一組拼字不一定只有一種讀音，例如 `ea` 可以是 `team [tim]`，也可以是 `bread [brɛd]`。遇到不確定的字，要用 KK 音標確認。

---

## R-controlled 母音

母音後面接 `r` 時，母音會被 `r` 影響，不能只照一般短母音唸。

| 英文字母 | 拼字 | 常見 KK | 來源字母/字母組合 | 例字 | 例句 | 中文翻譯 |
| -------- | ---- | ------- | ------------------ | ---- | ---- | -------- |
| A + R | `ar` | `[ɑr]` | `ar` | `car [kɑr]` | `The car is fast.` | 這台車很快。 |
| E + R | `er` | `[ɝ]` | `er` | `her [hɝ]` | `Her answer is clear.` | 她的答案很清楚。 |
| I + R | `ir` | `[ɝ]` | `ir` | `bird [bɝd]` | `A bird is singing.` | 一隻鳥正在唱歌。 |
| U + R | `ur` | `[ɝ]` | `ur` | `turn [tɝn]` | `Turn left here.` | 在這裡左轉。 |
| O + R | `or` | `[ɔr]` | `or` | `short [ʃɔrt]` | `The meeting is short.` | 會議很短。 |

嘴型提醒：

- `[ɝ]` 和 `[ɚ]` 有 r 的色彩，舌尖可以微捲，但不要碰到上顎。
- 不習慣捲舌的人，可以先把舌面往後收，感覺聲音集中在口腔中後段。

---

## KK 子音總表

子音比母音穩定，但要特別注意「有聲、無聲」和「字尾收音」。

| 英文字母 | KK | 來源字母/字母組合 | 例字 | 嘴型與舌位 | 例句與翻譯 |
| -------- | -- | ------------------ | ---- | ---------- | ---------- |
| P | `[p]` | `p` | `pen [pɛn]` | 雙唇閉住後放開，無聲 | `I need a pen.` 我需要一支筆。 |
| B | `[b]` | `b` | `bag [bæg]` | 雙唇閉住後放開，有聲 | `The bag is heavy.` 這個包包很重。 |
| T | `[t]` | `t`、`tt` | `tea [ti]` | 舌尖碰上齒齦，無聲 | `I drink tea.` 我喝茶。 |
| D | `[d]` | `d`、`ed` | `day [de]` | 舌尖碰上齒齦，有聲 | `Today is a good day.` 今天是美好的一天。 |
| K / C | `[k]` | `k`、`c`、`ck` | `key [ki]` | 舌後部頂住軟顎，無聲 | `This key opens the door.` 這把鑰匙能開門。 |
| G | `[g]` | `g`、`gg` | `go [go]` | 舌後部頂住軟顎，有聲 | `We go home at six.` 我們六點回家。 |
| F | `[f]` | `f`、`ph`、`gh` | `fish [fɪʃ]` | 上齒輕碰下唇，無聲 | `The fish is fresh.` 這條魚很新鮮。 |
| V | `[v]` | `v` | `voice [vɔɪs]` | 上齒輕碰下唇，有聲 | `Her voice is soft.` 她的聲音很柔和。 |
| T + H | `[θ]` | `th` | `thin [θɪn]` | 舌尖輕放齒間，無聲 | `The paper is thin.` 這張紙很薄。 |
| T + H | `[ð]` | `th` | `this [ðɪs]` | 舌尖輕放齒間，有聲 | `This is my book.` 這是我的書。 |
| S / C | `[s]` | `s`、`c`、`ss` | `sun [sʌn]` | 舌尖接近齒齦，無聲摩擦 | `The sun is bright.` 太陽很亮。 |
| Z / S | `[z]` | `z`、`s` | `zoo [zu]` | 舌尖接近齒齦，有聲摩擦 | `We went to the zoo.` 我們去了動物園。 |
| S + H | `[ʃ]` | `sh`、`ti`、`ci` | `ship [ʃɪp]` | 舌頭後縮，嘴唇微圓 | `The ship is large.` 這艘船很大。 |
| S / G | `[ʒ]` | `s`、`si`、`ge` | `vision [ˋvɪʒən]` | `[ʃ]` 的有聲版 | `He has a clear vision.` 他有清楚的願景。 |
| C + H | `[tʃ]` | `ch`、`tch` | `chair [tʃɛr]` | `[t]` 接 `[ʃ]`，無聲 | `Please take a chair.` 請拿一張椅子。 |
| J / G | `[dʒ]` | `j`、`g`、`dge` | `job [dʒɑb]` | `[d]` 接 `[ʒ]`，有聲 | `She has a new job.` 她有一份新工作。 |
| M | `[m]` | `m`、`mm` | `man [mæn]` | 雙唇閉住，鼻音 | `The man is kind.` 這個人很親切。 |
| N | `[n]` | `n`、`nn` | `name [nem]` | 舌尖碰齒齦，鼻音 | `My name is Ruiwen.` 我的名字是 Ruiwen。 |
| N + G | `[ŋ]` | `ng`、`n` + `k/g` | `song [sɔŋ]` | 舌後部抬起，鼻音 | `I like this song.` 我喜歡這首歌。 |
| L | `[l]` | `l`、`ll` | `light [laɪt]` | 舌尖碰齒齦，兩側出氣 | `The light is on.` 燈開著。 |
| R | `[r]` | `r`、`rr`、`wr` | `right [raɪt]` | 舌頭後縮，不碰上顎 | `You are right.` 你是對的。 |
| W | `[w]` | `w`、`wh` | `water [ˋwɔtɚ]` | 嘴唇先收圓再放開 | `I drink water.` 我喝水。 |
| Y | `[j]` | `y`、`u_e` | `yes [jɛs]` | 像英文 y 的開頭音 | `Yes, I understand.` 是的，我了解。 |
| H | `[h]` | `h`、`wh` | `home [hom]` | 喉嚨送氣，不要太用力 | `I am going home.` 我要回家。 |

---

## 常見子音字母組合

| 英文字母 | 拼字 | KK | 來源字母/字母組合 | 例字 | 例句 | 中文翻譯 |
| -------- | ---- | -- | ------------------ | ---- | ---- | -------- |
| S + H | `sh` | `[ʃ]` | `sh` | `shop [ʃɑp]` | `I went to the shop.` | 我去了那間店。 |
| C + H | `ch` | `[tʃ]` | `ch` | `check [tʃɛk]` | `Please check your email.` | 請檢查你的電子郵件。 |
| T + H | `th` | `[θ]` | `th` | `think [θɪŋk]` | `I think so.` | 我也這麼認為。 |
| T + H | `th` | `[ð]` | `th` | `that [ðæt]` | `That is a good idea.` | 那是個好主意。 |
| P + H | `ph` | `[f]` | `ph` | `phone [fon]` | `My phone is new.` | 我的手機是新的。 |
| N + G | `ng` | `[ŋ]` | `ng` | `sing [sɪŋ]` | `She can sing well.` | 她唱得很好。 |
| C + K | `ck` | `[k]` | `ck` | `back [bæk]` | `I will be back soon.` | 我很快就會回來。 |
| W + H | `wh` | `[w]` | `wh` | `when [wɛn]` | `When do we leave?` | 我們什麼時候離開？ |

口訣：**兩個字母一個音，先把常見組合整組記。**

---

## 容易混淆的最小對比

最小對比是只差一個音的單字。這種練習可以快速修正發音。

| 英文字母 | 對比 | 來源字母/字母組合 | 單字 1 | 單字 2 | 重點 |
| -------- | ---- | ------------------ | ------ | ------ | ---- |
| E / I | `[i]` vs `[ɪ]` | `seat` 的 `ea`；`sit` 的 `i` | `seat [sit]` 座位 | `sit [sɪt]` 坐 | `[i]` 嘴角拉開且較長；`[ɪ]` 短而放鬆 |
| E / A | `[ɛ]` vs `[æ]` | `bed` 的 `e`；`bad` 的 `a` | `bed [bɛd]` 床 | `bad [bæd]` 壞的 | `[æ]` 嘴巴更開，下巴更低 |
| U / O | `[ʊ]` vs `[u]` | `full` 的 `u`；`fool` 的 `oo` | `full [fʊl]` 滿的 | `fool [ful]` 傻瓜 | `[ʊ]` 短；`[u]` 嘴唇更圓 |
| U / O | `[ʌ]` vs `[ɑ]` | `cup` 的 `u`；`cop` 的 `o` | `cup [kʌp]` 杯子 | `cop [kɑp]` 警察 | `[ʌ]` 中央放鬆；`[ɑ]` 開口更大 |
| L / R | `[l]` vs `[r]` | `light` 的 `l`；`right` 的 `r` | `light [laɪt]` 光 | `right [raɪt]` 正確 | `[l]` 舌尖碰上面；`[r]` 不碰 |
| T + H / S | `[θ]` vs `[s]` | `thin` 的 `th`；`sin` 的 `s` | `thin [θɪn]` 薄的 | `sin [sɪn]` 罪 | `[θ]` 舌尖要在齒間 |
| T + H / D | `[ð]` vs `[d]` | `then` 的 `th`；`den` 的 `d` | `then [ðɛn]` 然後 | `den [dɛn]` 窩 | `[ð]` 是摩擦音，不是爆破音 |
| V / B | `[v]` vs `[b]` | `very` 的 `v`；`berry` 的 `b` | `very [ˋvɛrɪ]` 非常 | `berry [ˋbɛrɪ]` 莓果 | `[v]` 上齒碰下唇；`[b]` 雙唇閉住 |

### 最小對比練習

每組照下面順序練：

1. 慢速讀單字：`seat`、`sit`。
2. 只練不同的音：`[i]`、`[ɪ]`。
3. 加上字尾：`[it]`、`[ɪt]`。
4. 放進句子。

```text
I found a seat.
我找到一個座位。

Please sit here.
請坐這裡。
```

---

## 嘴型與口角練習

### `[i]` 和 `[ɪ]`

```text
seat [sit]
sit [sɪt]
```

練習提示：

- `[i]`：嘴角往兩邊拉，像微笑，聲音清楚。
- `[ɪ]`：嘴角放鬆，聲音短，不要把嘴拉太開。

例句：

```text
This seat is clean.
這個座位很乾淨。

Please sit beside me.
請坐在我旁邊。
```

### `[ɛ]` 和 `[æ]`

```text
bed [bɛd]
bad [bæd]
```

練習提示：

- `[ɛ]`：嘴巴半開，聲音短。
- `[æ]`：嘴巴張更大，下巴放低，嘴角平開。

例句：

```text
The bed is soft.
這張床很柔軟。

That was a bad idea.
那是個壞主意。
```

### `[u]` 和 `[ʊ]`

```text
food [fud]
book [bʊk]
```

練習提示：

- `[u]`：嘴唇圓而緊，聲音較長。
- `[ʊ]`：嘴唇微圓但放鬆，聲音短。

例句：

```text
The food is good.
食物很好吃。

This book looks useful.
這本書看起來很有用。
```

### `[l]` 和 `[r]`

```text
light [laɪt]
right [raɪt]
```

練習提示：

- `[l]`：舌尖碰上齒齦，聲音從舌頭兩側出去。
- `[r]`：舌頭往後收，不碰上顎，嘴唇可微微收圓。

例句：

```text
Turn on the light.
把燈打開。

You are right.
你是對的。
```

### `[θ]` 和 `[ð]`

```text
think [θɪŋk]
this [ðɪs]
```

練習提示：

- `[θ]`：無聲，舌尖輕放齒間，只送氣。
- `[ð]`：有聲，舌尖位置相同，但喉嚨會震動。

例句：

```text
I think this is important.
我認為這很重要。

This book is thin.
這本書很薄。
```

---

## 重音與弱化

英文不是每個音都一樣重。句子裡重要的字會比較清楚，不重要的字常常變輕，甚至變成 `[ə]`。

| 英文字母 | 單字 | KK | 來源字母/字母組合 | 說明 |
| -------- | ---- | -- | ------------------ | ---- |
| A / O + U | `about` | `[əˋbaʊt]` | `a` -> `[ə]`；`ou` -> `[aʊ]` | 第一音節弱化成 `[ə]` |
| E + A / C + H / E + R | `teacher` | `[ˋtitʃɚ]` | `ea` -> `[i]`；`ch` -> `[tʃ]`；`er` -> `[ɚ]` | 第一音節重，字尾 `[ɚ]` 輕 |
| A | `banana` | `[bəˋnænə]` | 非重音 `a` -> `[ə]`；重音 `a` -> `[æ]` | 中間音節重，前後弱化 |
| O / A + Y | `today` | `[təˋde]` | 非重音 `o` -> `[ə]`；`ay` -> `[e]` | 第一音節弱化 |

### 句子重音

```text
I want a cup of coffee.
我想要一杯咖啡。
```

朗讀時可以把重音放在 `want`、`cup`、`coffee`：

```text
I WANT a CUP of COFFEE.
```

`a` 和 `of` 可以輕一點。自然的英文不是每個字都平均用力。

口訣：**內容字讀清楚，功能字輕輕帶。**

---

## 常見發音錯誤與修正

| 英文字母 | 問題 | 常見錯誤 | 來源字母/字母組合 | 修正方式 |
| -------- | ---- | -------- | ------------------ | -------- |
| T | 字尾子音不收 | `cat` 唸得像 `ca` | 字尾 `t` -> `[t]` | 最後的 `[t]` 要舌尖碰上去，但不用加「ㄊㄜ」 |
| I / E | `[i]` 和 `[ɪ]` 混淆 | `sit` 唸成 `seat` | `sit` 的 `i`；`seat` 的 `ea` | `[ɪ]` 嘴角放鬆，聲音短 |
| A / E | `[æ]` 唸太小 | `bad` 聽起來像 `bed` | `bad` 的 `a`；`bed` 的 `e` | 下巴放低，嘴巴張大 |
| V / B | `[v]` 唸成 `[b]` | `very` 聽起來像 `berry` | `very` 的 `v`；`berry` 的 `b` | 上齒輕碰下唇，保持摩擦 |
| T + H / S | `[θ]` 唸成 `[s]` | `thin` 聽起來像 `sin` | `thin` 的 `th`；`sin` 的 `s` | 舌尖輕放齒間送氣 |
| R / L | `[r]` 舌頭碰到上顎 | `right` 聽起來像 `light` | `right` 的 `r`；`light` 的 `l` | 舌頭後縮，不要碰上顎 |
| A / E / O | 每個字都一樣重 | 句子聽起來不自然 | 非重音母音常弱化成 `[ə]` | 練句子重音和 `[ə]` 弱化 |

---

## 自然發音規則練習

### 練習 A：判斷短母音

請先根據拼字猜中間母音，再看答案。

```text
1. cat
2. bed
3. fish
4. hot
5. cup
```

答案：

| 英文字母 | 單字 | KK | 來源字母/字母組合 | 中文 |
| -------- | ---- | -- | ------------------ | ---- |
| A | `cat` | `[kæt]` | `a` -> `[æ]` | 貓 |
| E | `bed` | `[bɛd]` | `e` -> `[ɛ]` | 床 |
| I / S + H | `fish` | `[fɪʃ]` | `i` -> `[ɪ]`；`sh` -> `[ʃ]` | 魚 |
| O | `hot` | `[hɑt]` | `o` -> `[ɑ]` | 熱的 |
| U | `cup` | `[kʌp]` | `u` -> `[ʌ]` | 杯子 |

### 練習 B：判斷 silent e

讀出下面每組單字，注意母音改變。

```text
1. cap / cape
2. hop / hope
3. kit / kite
4. cub / cube
5. not / note
```

答案：

| 英文字母 | 短母音 | 短音 KK | 短音來源字母 | 長母音 | 長音 KK | 長音來源字母/組合 |
| -------- | ------ | ------- | ------------ | ------ | ------- | ------------------ |
| A | `cap` | `[kæp]` | `a` | `cape` | `[kep]` | `a_e` |
| O | `hop` | `[hɑp]` | `o` | `hope` | `[hop]` | `o_e` |
| I | `kit` | `[kɪt]` | `i` | `kite` | `[kaɪt]` | `i_e` |
| U | `cub` | `[kʌb]` | `u` | `cube` | `[kjub]` | `u_e` |
| O | `not` | `[nɑt]` | `o` | `note` | `[not]` | `o_e` |

### 練習 C：判斷子音組合

請把下面單字的子音組合圈出來，再讀句子。

```text
1. ship
2. chair
3. think
4. phone
5. sing
```

答案：

| 英文字母 | 單字 | 子音組合 | KK | 來源字母/字母組合 | 句子 | 中文 |
| -------- | ---- | -------- | -- | ------------------ | ---- | ---- |
| S + H | `ship` | `sh` | `[ʃɪp]` | `sh` -> `[ʃ]` | `The ship is big.` | 這艘船很大。 |
| C + H | `chair` | `ch` | `[tʃɛr]` | `ch` -> `[tʃ]` | `This chair is old.` | 這張椅子很舊。 |
| T + H | `think` | `th` | `[θɪŋk]` | `th` -> `[θ]` | `Think before you speak.` | 說話前先想一想。 |
| P + H | `phone` | `ph` | `[fon]` | `ph` -> `[f]` | `My phone is on the desk.` | 我的手機在桌上。 |
| N + G | `sing` | `ng` | `[sɪŋ]` | `ng` -> `[ŋ]` | `She likes to sing.` | 她喜歡唱歌。 |

---

## KK 音標練習

### 練習 D：看 KK 選單字

```text
1. [sɪt]
2. [sit]
3. [bɛd]
4. [bæd]
5. [fʊl]
6. [ful]
```

答案：

| 英文字母 | KK | 來源字母/字母組合 | 單字 | 中文 |
| -------- | -- | ------------------ | ---- | ---- |
| I | `[sɪt]` | `i` -> `[ɪ]` | `sit` | 坐 |
| E + A | `[sit]` | `ea` -> `[i]` | `seat` | 座位 |
| E | `[bɛd]` | `e` -> `[ɛ]` | `bed` | 床 |
| A | `[bæd]` | `a` -> `[æ]` | `bad` | 壞的 |
| U | `[fʊl]` | `u` -> `[ʊ]` | `full` | 滿的 |
| O + O | `[ful]` | `oo` -> `[u]` | `fool` | 傻瓜 |

### 練習 E：朗讀句子

先慢讀，再自然速度讀。

```text
1. The cat sat on the mat.
   貓坐在墊子上。

2. I need a seat near the window.
   我需要一個靠窗的座位。

3. This thin book is useful.
   這本薄薄的書很有用。

4. The food is good, but the soup is hot.
   食物很好吃，但是湯很熱。

5. Turn right at the light.
   在紅綠燈那裡右轉。
```

練習重點：

- `cat`、`sat`、`mat` 的 `[æ]` 嘴巴要張開。
- `seat` 是 `[i]`，不是 `[ɪ]`。
- `thin` 的 `[θ]` 舌尖要放齒間。
- `food [fud]` 和 `good [gʊd]` 不同。
- `right [raɪt]` 和 `light [laɪt]` 要分清楚。

---

## 每日 15 分鐘練習流程

### 第 1 步：聽 2 分鐘

先聽單字或句子，不急著看文字。目標是聽出重音和母音。

### 第 2 步：拆音 3 分鐘

把單字拆成 KK 音：

```text
teacher [ˋtitʃɚ]
[t] + [i] + [tʃ] + [ɚ]
```

### 第 3 步：嘴型 3 分鐘

對著鏡子看：

- 嘴角有沒有拉開。
- 嘴唇有沒有收圓。
- 舌尖有沒有碰到正確位置。
- 字尾子音有沒有收乾淨。

### 第 4 步：最小對比 3 分鐘

每天選兩組最小對比：

```text
seat / sit
bed / bad
full / fool
light / right
thin / sin
```

### 第 5 步：句子跟讀 4 分鐘

用「聽一次、停一次、跟讀一次、錄一次」的方式練。錄音後只檢查一個重點，例如今天只檢查 `[æ]`，不要一次改太多東西。

---

## 如何擴充內建詞庫

內建詞庫放在：

```text
assets/data/phonics-words.json
```

每一筆單字建議維持相同欄位。快速查詢主要讀取 `word`、`kk`、`syllables`、`stress`、`vowelPositions`、`phonicsRule`、`note`、`example`。

```json
{
  "word": "computer",
  "kk": "[kəmˋpjutɚ]",
  "translation": "電腦",
  "partOfSpeech": "noun",
  "level": "core",
  "syllables": "com-pu-ter",
  "stress": "第二音節",
  "mainVowel": "o -> [ə], u -> [ju], er -> [ɚ]",
  "vowelPositions": "o 在 com 弱化；u 在 pu 讀 [ju]；字尾 er 讀 [ɚ]",
  "phonicsRule": "非重音 o 弱化；u 可讀 [ju]；字尾 er 帶 r 色彩",
  "note": "pu 不要唸成中文「普」，要有 [j] 的滑音。",
  "example": "I use a computer every day.",
  "tags": ["schwa", "long-u", "r-colored"]
}
```

若要擴充到多益核心 7000 單字，建議做法：

1. 先建立合法來源的單字清單，不直接複製受版權保護的商業詞庫內容。
2. 用試算表整理欄位：`word`、`kk`、`translation`、`partOfSpeech`、`level`、`syllables`、`stress`、`vowelPositions`、`phonicsRule`、`note`、`example`、`tags`。
3. 轉成 JSON 後追加到 `words` 陣列。
4. 每次新增一批後，先確認 JSON 格式正確，再重新 build 網站。

---

## 七天練習計畫

| 天數 | 主題 | 練習內容 |
| ---- | ---- | -------- |
| Day 1 | 短母音 | `cat`、`bed`、`sit`、`hot`、`cup` |
| Day 2 | 長母音 | `cake`、`see`、`kite`、`go`、`cube` |
| Day 3 | 子音組合 | `sh`、`ch`、`th`、`ph`、`ng` |
| Day 4 | 最小對比 | `[i]/[ɪ]`、`[ɛ]/[æ]`、`[ʊ]/[u]` |
| Day 5 | R-controlled | `car`、`bird`、`turn`、`short`、`teacher` |
| Day 6 | 句子重音 | 練內容字重音與 `[ə]` 弱化 |
| Day 7 | 錄音複習 | 選 10 個單字和 5 句句子錄音 |

---

## 發音自我檢查表

朗讀後，用下面清單檢查：

- 我有把短母音唸短嗎？
- 我有把長母音唸清楚嗎？
- `[i]` 和 `[ɪ]` 有區分嗎？
- `[ɛ]` 和 `[æ]` 有區分嗎？
- `[u]` 和 `[ʊ]` 有區分嗎？
- `[l]` 和 `[r]` 舌位有不同嗎？
- `[θ]` 和 `[ð]` 舌尖有放在齒間嗎？
- 字尾 `[p]`、`[t]`、`[k]` 有收乾淨嗎？
- 句子中重要的字有比較清楚嗎？
- 不重要的字有自然變輕嗎？

---

## 快速總結

自然發音和 KK 音標不是二選一。自然發音讓你看到字時能先推測讀音，KK 音標讓你查字典時能確認正確發音。學習時要把規則、例外、嘴型和句子一起練，才會真正變成能聽、能說、能修正的能力。

最後記住三句口訣：

```text
自然發音先猜音，KK 音標來確認。
母音先看嘴型，子音要看舌位。
單字慢慢練清楚，句子重音才自然。
```
