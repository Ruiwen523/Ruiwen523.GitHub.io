document.addEventListener('DOMContentLoaded', () => {
  initializeGrammarCarousel();
});

let grammarAudioContext;
let lastAudioTouchTime = 0;

function initializeGrammarCarousel() {
  const groups = Array.from(document.querySelectorAll('.grammar-card-group'));

  if (groups.length) {
    groups.forEach((group) => {
      initializeGrammarCarouselForCards(
        Array.from(group.querySelectorAll('.grammar-card')),
        group
      );
    });

    return;
  }

  initializeGrammarCarouselForCards(
    Array.from(document.querySelectorAll('.grammar-card'))
  );
}

function initializeGrammarCarouselForCards(cards, container = null) {
  if (cards.length < 2) {
    return;
  }

  const parent = container || cards[0].parentElement;
  const referenceNode = container
    ? getDirectChild(container, cards[0])
    : cards[0];

  if (!parent || !referenceNode) {
    return;
  }

  const originalChildren = Array.from(parent.children);
  const firstIndex = originalChildren.indexOf(referenceNode);
  const lastCardChild = container
    ? getDirectChild(container, cards[cards.length - 1])
    : cards[cards.length - 1];
  const lastIndex = originalChildren.indexOf(lastCardChild);
  const rangeChildren = originalChildren.slice(firstIndex, lastIndex + 1);

  const carousel = document.createElement('section');
  carousel.className = 'grammar-carousel';
  carousel.setAttribute('aria-label', 'Grammar question carousel');

  carousel.innerHTML = `
    <div class="grammar-carousel__viewport">
      <div class="grammar-carousel__track"></div>
    </div>

    <div class="grammar-carousel__controls">
      <button class="grammar-carousel__button" type="button" data-carousel-prev aria-label="Previous question">
        &lt;
      </button>

      <div class="grammar-carousel__status" aria-live="polite"></div>

      <button class="grammar-carousel__button" type="button" data-carousel-next aria-label="Next question">
        &gt;
      </button>
    </div>
  `;

  parent.insertBefore(carousel, referenceNode);

  rangeChildren.forEach((child) => {
    if (child.tagName === 'HR') {
      child.remove();
    }
  });

  const track = carousel.querySelector('.grammar-carousel__track');
  const status = carousel.querySelector('.grammar-carousel__status');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  const shuffledCards = shuffle(cards);
  let currentIndex = 0;
  let touchStartX = 0;
  let touchDeltaX = 0;

  shuffledCards.forEach((card, index) => {
    card.classList.add('grammar-carousel__slide');
    card.dataset.carouselIndex = index + 1;
    updateCardProgress(card, index, shuffledCards.length);
    track.appendChild(card);
  });

  const updateCarousel = () => {
    closeGrammarDescriptions();
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    status.textContent = `${currentIndex + 1} / ${shuffledCards.length}`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === shuffledCards.length - 1;
  };

  const goTo = (nextIndex) => {
    currentIndex = Math.max(0, Math.min(nextIndex, shuffledCards.length - 1));
    updateCarousel();
  };

  prevButton.addEventListener('click', () => goTo(currentIndex - 1));
  nextButton.addEventListener('click', () => goTo(currentIndex + 1));

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(currentIndex - 1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(currentIndex + 1);
    }
  });

  carousel.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.touches[0].clientX;
      touchDeltaX = 0;
    },
    { passive: true }
  );

  carousel.addEventListener(
    'touchmove',
    (event) => {
      touchDeltaX = event.touches[0].clientX - touchStartX;
    },
    { passive: true }
  );

  carousel.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) < 50) {
      return;
    }

    goTo(currentIndex + (touchDeltaX < 0 ? 1 : -1));
  });

  updateCarousel();
}

function getDirectChild(parent, child) {
  let current = child;

  while (current && current.parentElement !== parent) {
    current = current.parentElement;
  }

  return current || child;
}

function updateCardProgress(card, index, total) {
  const title = card.querySelector('.grammar-card__title');
  const progress = card.querySelector('.grammar-card__progress');
  const questionNumber = index + 1;
  const percent = Math.round((questionNumber / total) * 100);

  if (title) {
    title.textContent = `Question ${questionNumber}`;
  }

  if (progress) {
    progress.textContent = `${percent}%`;
    progress.setAttribute(
      'aria-label',
      `Progress ${questionNumber} of ${total}`
    );
  }
}

document.addEventListener('click', (event) => {
  const grammarItem = event.target.closest('.grammar-breakdown > span');

  if (!grammarItem) {
    closeGrammarDescriptions();
    return;
  }

  event.stopPropagation();

  const wasOpen = grammarItem.classList.contains('is-desc-open');
  closeGrammarDescriptions(grammarItem.closest('.grammar-card'));
  grammarItem.classList.toggle('is-desc-open', !wasOpen);

  if (!wasOpen) {
    positionGrammarDescription(grammarItem);
  }
});

document.addEventListener('mouseover', (event) => {
  const grammarItem = event.target.closest('.grammar-breakdown > span');

  if (grammarItem) {
    positionGrammarDescription(grammarItem);
  }
});

document.addEventListener('click', (event) => {
  const audioButton = event.target.closest('.question-audio-button');

  if (!audioButton) {
    return;
  }

  if (Date.now() - lastAudioTouchTime < 500) {
    return;
  }

  event.stopPropagation();
  playSentenceAudio(audioButton);
});

document.addEventListener(
  'touchend',
  (event) => {
    const audioButton = event.target.closest('.question-audio-button');

    if (!audioButton) {
      return;
    }

    lastAudioTouchTime = Date.now();
    event.preventDefault();
    event.stopPropagation();
    playSentenceAudio(audioButton);
  },
  { passive: false }
);

function playSentenceAudio(audioButton) {
  speakSentence(audioButton.dataset.speakSentence, audioButton);
}

function closeGrammarDescriptions(scope = document) {
  scope
    .querySelectorAll('.grammar-breakdown > span.is-desc-open')
    .forEach((item) => {
      item.classList.remove('is-desc-open');
    });
}

function positionGrammarDescription(grammarItem) {
  const card = grammarItem.closest('.grammar-card');
  const description = grammarItem.querySelector('.grammar-desc');

  if (!card || !description) {
    return;
  }

  grammarItem.classList.remove('is-desc-left');

  const previousDisplay = description.style.display;
  const previousVisibility = description.style.visibility;
  description.style.display = 'block';
  description.style.visibility = 'hidden';

  const cardRect = card.getBoundingClientRect();
  const descriptionRect = description.getBoundingClientRect();

  description.style.display = previousDisplay;
  description.style.visibility = previousVisibility;

  if (descriptionRect.right > cardRect.right) {
    grammarItem.classList.add('is-desc-left');
  }
}

function shuffle(items) {
  const shuffledItems = [...items];

  for (let i = shuffledItems.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
  }

  return shuffledItems;
}

function checkAnswer(button, selected, correct) {
  const card = button.closest('.grammar-card');
  const result = card.querySelector('.result');
  const analysisDiv = card.querySelector('.analysis');
  const audioButton = card.querySelector('.question-audio-button');
  const correctAnswers = (card.dataset.correctAnswers || correct)
    .split('|')
    .map((answer) => answer.trim())
    .filter(Boolean);
  const acceptableAnswers = (card.dataset.acceptableAnswers || '')
    .split('|')
    .map((answer) => answer.trim())
    .filter(Boolean);
  const isCorrectAnswer = correctAnswers.includes(selected);
  const isAcceptableAnswer = acceptableAnswers.includes(selected);

  const buttons = card.querySelectorAll('button');

  buttons.forEach((btn) => {
    btn.classList.remove('correct', 'wrong');
  });

  if (audioButton) {
    audioButton.hidden = false;
    audioButton.dataset.speakSentence = buildSelectedSentence(card, selected);
  }

  if (isCorrectAnswer) {
    button.classList.add('correct');
    result.innerHTML = 'Correct!';
    revealFullTranslation(card, selected);
    playCorrectSound();
    renderAnalysis(card, selected);
  } else if (isAcceptableAnswer) {
    button.classList.add('correct');
    result.innerHTML =
      card.dataset.acceptableMessage || '文法正確，但不是最標準答案。';
    revealFullTranslation(card, selected);
    renderAnalysis(card, selected);
  } else {
    button.classList.add('wrong');
    result.innerHTML = 'Try again!';
    resetPromptTranslation(card);

    renderAnalysis(card, correct);
  }
}

function buildSelectedSentence(card, selectedAnswer) {
  const audioButton = card.querySelector('.question-audio-button');
  const questionTemplate =
    audioButton?.dataset.questionTemplate ||
    card.querySelector('.question-text')?.textContent ||
    '';

  return questionTemplate.trim().replace('___', selectedAnswer);
}

function revealFullTranslation(card, selectedAnswer) {
  const translation = card.querySelector('.question-translation');

  if (!translation || !translation.dataset.fullTranslation) {
    return;
  }

  translation.textContent =
    getAnswerTranslation(card, selectedAnswer) ||
    translation.dataset.fullTranslation;
  translation.classList.add('is-revealed');
}

function getAnswerTranslation(card, selectedAnswer) {
  if (!card.dataset.answerTranslations) {
    return '';
  }

  try {
    const translations = JSON.parse(card.dataset.answerTranslations);
    return translations[selectedAnswer] || '';
  } catch (error) {
    return '';
  }
}

function resetPromptTranslation(card) {
  const translation = card.querySelector('.question-translation');

  if (!translation || !translation.dataset.promptTranslation) {
    return;
  }

  translation.textContent = translation.dataset.promptTranslation;
  translation.classList.remove('is-revealed');
}

function playCorrectSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    return;
  }

  try {
    grammarAudioContext = grammarAudioContext || new AudioContext();

    if (grammarAudioContext.state === 'suspended') {
      grammarAudioContext.resume();
    }

    const now = grammarAudioContext.currentTime;
    playTone(523.25, now, 0.11, 0.13);
    playTone(659.25, now + 0.1, 0.12, 0.13);
    playTone(783.99, now + 0.21, 0.16, 0.12);
  } catch (error) {
    // Audio feedback is optional; answering should keep working if playback fails.
  }
}

function playTone(frequency, startTime, duration, volume = 0.1) {
  const oscillator = grammarAudioContext.createOscillator();
  const gain = grammarAudioContext.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, startTime);

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(grammarAudioContext.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}

function speakSentence(sentence, button) {
  if (
    !sentence ||
    !window.speechSynthesis ||
    !window.SpeechSynthesisUtterance
  ) {
    return;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();

  const utterance = new SpeechSynthesisUtterance(sentence);
  const voices = window.speechSynthesis.getVoices();
  const americanVoice =
    voices.find((voice) => voice.lang === 'en-US') ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith('en-us'));

  utterance.lang = 'en-US';
  utterance.rate = 0.7;
  utterance.pitch = 1;
  utterance.volume = 1;

  if (americanVoice) {
    utterance.voice = americanVoice;
  }

  button.classList.add('is-speaking');

  utterance.onend = () => {
    button.classList.remove('is-speaking');
  };

  utterance.onerror = () => {
    button.classList.remove('is-speaking');
  };

  window.speechSynthesis.speak(utterance);
}

function renderAnalysis(card, selectedAnswer) {
  const analysisDiv = card.querySelector('.analysis');
  const data = JSON.parse(analysisDiv.dataset.analysis);
  const selectedNotes = getAnalysisNotes(card, selectedAnswer);

  let html = '<div class="grammar-breakdown">';
  const notes = [];

  data.forEach((item) => {
    if (item.label === 'Note') {
      notes.push(selectedNotes.shift() || item.desc || item.word || '');
      return;
    }

    let cls = '';

    switch (item.label) {
      case 'S':
      case 'Subj':
        cls = 'grammar-subject';
        break;

      case 'Poss':
        cls = 'grammar-possessive';
        break;

      case 'Obj':
        cls = 'grammar-object';
        break;

      case 'Be':
        cls = 'grammar-beverb';
        break;

      case 'Art':
        cls = 'grammar-article';
        break;

      case 'N':
        cls = 'grammar-noun';
        break;

      case 'V':
        cls = 'grammar-verb';
        break;

      case 'Adj':
        cls = 'grammar-adj';
        break;

      case 'Prep':
        cls = 'grammar-prep';
        break;

      case 'Time':
        cls = 'grammar-time';
        break;

      case 'Place':
        cls = 'grammar-place';
        break;

      default:
        cls = 'grammar-default';
    }

    html += `
        <span class="${cls}">
            <span class="word">${item.word}</span>
            ${item.kk ? `<span class="kk">${item.kk}</span>` : ''}

            <small>${item.label}</small>

            <div class="grammar-desc">
                ${item.kk ? `<strong>KK: ${item.kk}</strong><br>` : ''}
                ${item.desc || ''}
            </div>
        </span>
    `;
  });

  html += '</div>';

  notes.forEach((note) => {
    html += `<div class="grammar-note">${note}</div>`;
  });

  analysisDiv.innerHTML = html;
}

function getAnalysisNotes(card, selectedAnswer) {
  if (!card.dataset.analysisNotes) {
    return [];
  }

  try {
    const notes = JSON.parse(card.dataset.analysisNotes);
    const selectedNotes = notes[selectedAnswer] || [];

    return Array.isArray(selectedNotes) ? [...selectedNotes] : [selectedNotes];
  } catch (error) {
    return [];
  }
}
