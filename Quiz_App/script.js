const num = document.getElementById('number');
const middle = document.getElementById('middle');
const btn = document.getElementById('btn');
const quesLength = document.getElementById('ques-length');

const questions = [
  {
    question: 'What does CSS stand for?',
    options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style System', 'Colorful Style Sheets'],
    correct: 0
  },
  {
    question: 'What does HTML stand for?',
    options: ['Hascading Style Sheets', 'Hyper Text Markup Language', 'Creative Style System', 'Colorful Style Sheets'],
    correct: 1
  },
  {
    question: 'What does JS stand for?',
    options: ['Java Sheets', 'JavaScript', 'Creative Style System', 'Colorful Style Sheets'],
    correct: 1
  },
  {
    question: 'What does DOM stand for?',
    options: ['Sascading Style Sheets', 'Computer Style Sheets', 'Document Object Model', 'Colorful Style Sheets'],
    correct: 2
  },
  {
    question: 'What does API stand for?',
    options: ['Application Programming Interface', 'Computer Style Sheets', 'Creative Style System', 'Colorful Style Sheets'],
    correct: 0
  },
  {
    question: 'What does URL stand for?',
    options: ['Cascading Style Sheets', 'Lomputer Style Sheets', 'Creative Style System', 'Uniform Resource Locator'],
    correct: 3
  }
];

let currentIndex = 0;
let score = 0;
quesLength.innerHTML = questions.length;

function showQuestion() {
  num.innerHTML = currentIndex + 1;
  const current = questions[currentIndex];

  middle.innerHTML = `
    <div class="ques">${current.question}</div>
    <ul>
      ${current.options.map((opt, i) =>
    `<li data-index="${i}">${opt}</li>`
  ).join('')}
    </ul>
  `;

  middle.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', () => {
      const selected = Number(li.dataset.index);

      middle.querySelectorAll('li').forEach((item, i) => {
        item.style.color = i === current.correct ? 'green' : 'red';
        item.style.pointerEvents = 'none';
      });

      if (selected === current.correct) score++;
    });
  });
}

showQuestion();

btn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    middle.innerHTML = `<h2 style="color:#baffe8">${score}/${questions.length} Correct! 🎉</h2>`;
    btn.style.display = 'none';
  }
});