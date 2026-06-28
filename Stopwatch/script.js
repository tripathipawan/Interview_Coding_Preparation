const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let timer = null;
let sec = 0;

const pad = (n) => n < 10 ? `0${n}` : `${n}`;

function counting() {
  sec++;
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;

  second.innerHTML = pad(s);
  minute.innerHTML = pad(m);
  hour.innerHTML = pad(h);

}

start.addEventListener('click', () => {
  if (timer) return;
  timer = setInterval(counting, 1000);
  start.innerHTML = 'Continue';
});

stop.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

reset.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  hour.innerHTML = '00';
  minute.innerHTML = '00';
  second.innerHTML = '00';
  sec = 0
  start.innerHTML = 'Start';
});



// ----------- AI Solution ------------------


// const hour = document.querySelector('.hour');
// const minute = document.querySelector('.minute');
// const second = document.querySelector('.second');
// const startBtn = document.querySelector('.start');
// const stopBtn = document.querySelector('.stop');
// const resetBtn = document.querySelector('.reset');

// let timer = null;
// let sec = 0;

// const pad = (n) => String(n).padStart(2, '0');

// function updateDisplay() {
//   hour.textContent = pad(Math.floor(sec / 3600));
//   minute.textContent = pad(Math.floor((sec % 3600) / 60));
//   second.textContent = pad(sec % 60);
// }

// startBtn.addEventListener('click', () => {
//   if (timer) return;
//   timer = setInterval(() => {
//     sec++;
//     updateDisplay();
//   }, 1000);
//   startBtn.textContent = 'Continue';
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timer);
//   timer = null;
// });

// resetBtn.addEventListener('click', () => {
//   clearInterval(timer);
//   timer = null;
//   sec = 0;
//   updateDisplay();
//   startBtn.textContent = 'Start';
// });