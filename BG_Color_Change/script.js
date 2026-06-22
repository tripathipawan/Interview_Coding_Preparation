const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

red.addEventListener('click', () => {
  document.body.style.backgroundColor = '#ff0000';
});
orange.addEventListener('click', () => {
  document.body.style.backgroundColor = '#e26600';
});
pink.addEventListener('click', () => {
  document.body.style.backgroundColor = '#ff00a6';
});
green.addEventListener('click', () => {
  document.body.style.backgroundColor = '#008000';
});
blue.addEventListener('click', () => {
  document.body.style.backgroundColor = '#0000ff';
});