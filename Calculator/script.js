const display = document.querySelector('.display');
const btnbox = document.querySelector('.btn-box');


const data = ['C', 'AC', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '%', '0', '00', '.', '=']

data.forEach((e) => {
  const btns = document.createElement('button');
  btns.classList.add('btn');
  btns.innerHTML = e;
  btnbox.appendChild(btns);
});


btnbox.addEventListener('click', (e) => {
  if (!e.target.classList.contains('btn')) return;
  const value = e.target.innerHTML;

  if (value === 'C') {
    display.innerHTML = display.innerHTML.slice(0, -1);
    if (display.innerHTML === '') {
      display.innerHTML = '0';
    }
  } else if (value === 'AC') {
    display.innerHTML = '0';
  } else if (value === '=') {
    try {
      display.innerHTML = eval(display.innerHTML);
    } catch {
      display.innerHTML = 'Error';
    }
  } else {
    if (display.innerHTML === '0' || display.innerHTML === '00' || display.innerHTML === 'Error') {
      display.innerHTML = value;
    } else {
      display.innerHTML += value;
    }
  }
});

