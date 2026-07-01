const container = document.querySelector('.container');

const list = [
  {
    id: 1,
    ques: 'What is the full form of HTML?',
    ans: 'Hyper Text Markup Language',
  },
  {
    id: 2,
    ques: 'What is the full form of CSS?',
    ans: 'Cascading Style Sheets',
  },
  {
    id: 3,
    ques: 'What is the full form of JS?',
    ans: 'JavaScript',
  },
  {
    id: 4,
    ques: 'What is the full form of DOM?',
    ans: 'Document Object Model',
  },
];


list.forEach((e) => {
  const lists = document.createElement('div');
  const questions = document.createElement('div');
  const singleques = document.createElement('span');
  const btn = document.createElement('button');
  const ans = document.createElement('div');

  lists.classList.add('ques-list');
  questions.classList.add('ques');
  ans.classList.add('ans');
  btn.classList.add('btn');

  container.appendChild(lists);
  lists.appendChild(questions);
  questions.appendChild(singleques);
  questions.appendChild(btn);
  lists.appendChild(ans);

  singleques.innerHTML = e.ques;
  ans.innerHTML = e.ans;
  btn.innerHTML = '>';
  ans.style.display = 'none';

  questions.addEventListener('click', () => {
    if (ans.style.display === 'none') {
      ans.style.display = 'block';
      btn.style.transform = 'rotate(90deg)';
    } else {
      ans.style.display = 'none';
      btn.style.transform = 'rotate(0deg)';
    }
  });
});


// -------------- AI Version -------------------------



// const container = document.querySelector('.container');

// const list = [
//   { id: 1, ques: 'What is the full form of HTML?', ans: 'Hyper Text Markup Language' },
//   { id: 2, ques: 'What is the full form of CSS?', ans: 'Cascading Style Sheets' },
//   { id: 3, ques: 'What is the full form of JS?', ans: 'JavaScript' },
//   { id: 4, ques: 'What is the full form of DOM?', ans: 'Document Object Model' },
// ];

// list.forEach((e) => {
//   const item = document.createElement('div');
//   item.classList.add('item');
//   item.innerHTML = `
//     <div class="question">
//       <span>${e.ques}</span>
//       <span class="arrow">▶</span>
//     </div>
//     <div class="answer">${e.ans}</div>
//   `;
//   container.appendChild(item);
// });

// container.addEventListener('click', (e) => {
//   const item = e.target.closest('.item');
//   if (!item) return;

//   const isActive = item.classList.contains('active');

//   document.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
//   if (!isActive) item.classList.add('active');
// });