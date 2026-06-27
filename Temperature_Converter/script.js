const input = document.querySelector('.input-box');
const result = document.querySelector('.result');
const fahbtn = document.querySelector('.fah');
const celbtn = document.querySelector('.cel');

// Celsius to Fahrenheit
fahbtn.addEventListener('click', () => {
  const value = Number(input.value);

  if (input.value === '') return;
  if (isNaN(value)) return;

  const temp = (value * 9 / 5) + 32;
  const res = temp.toFixed(2);
  result.innerHTML = res + ' °F';
});

// Fahrenheit to Celsius
celbtn.addEventListener('click', () => {
  const value = Number(input.value);

  if (input.value === '') return;
  if (isNaN(value)) return;

  const temp = (value - 32) * 5 / 9;
  const res = temp.toFixed(2);
  result.innerHTML = res + ' °C';
});