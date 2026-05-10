function checkAnswer(button, selected, correct) {
  const card = button.closest('.grammar-card');
  const result = card.querySelector('.result');
  const analysisDiv = card.querySelector('.analysis');

  const buttons = card.querySelectorAll('button');

  buttons.forEach((btn) => {
    btn.classList.remove('correct', 'wrong');
  });

  if (selected === correct) {
    button.classList.add('correct');
    result.innerHTML = 'Correct!';
  } else {
    button.classList.add('wrong');
    result.innerHTML = 'Try again!';

    renderAnalysis(card, correct);
  }
}

function renderAnalysis(card, correctAnswer) {
  const analysisDiv = card.querySelector('.analysis');
  const data = JSON.parse(analysisDiv.dataset.analysis);

  let html = '<div class="grammar-breakdown">';

  data.forEach((item) => {
    let cls = '';

    switch (item.label) {
      case 'S':
        cls = 'grammar-subject';
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

            <small>${item.label}</small>

            <div class="grammar-desc">
                ${item.desc || ''}
            </div>
        </span>
    `;
  });

  html += '</div>';

  analysisDiv.innerHTML = html;
}
