const input = document.getElementById('input-box');
const guess = document.getElementById('Guess');
const msg = document.getElementById('msg');
const attempt = document.getElementById('attempt');
const reset = document.getElementById('reset');

let secret = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxattempts = 3;

guess.addEventListener('click', () => {

  // 1. Attempts limit check
  if (attempts >= maxattempts) return;

  const num = Number(input.value);

  // 2. Empty check
  if (input.value === '') return;

  // 3. Attempts increase
  attempts++;
  attempt.innerHTML = attempts;

  // 4. Guess check
  if (num === secret) {
    msg.innerHTML = '🎉 Correct!';
  } else if (num > secret) {
    msg.innerHTML = '📈 Too High';
  } else {
    msg.innerHTML = '📉 Too Low';
  }

  // 5. Attempts End
  if (attempts === maxattempts && num !== secret) {
    msg.innerHTML = `❌ Game Over! Number was ${secret}`;
  }
});

reset.addEventListener('click', () => {
  attempts = 0;
  input.value = '';
  msg.innerHTML = '????';
  attempt.innerHTML = 0;
  secret = Math.floor(Math.random() * 100) + 1;
});