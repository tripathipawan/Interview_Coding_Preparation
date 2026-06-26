const copy_btn = document.querySelector('.copy_btn');
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');


let arr = '0123456789ABCDEF';

btn.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    hexColor = hexColor + arr[randomIndex];
  }
  document.body.style.backgroundColor = hexColor;
  color.innerHTML = hexColor;

});

copy_btn.addEventListener('click', () => {
  navigator.clipboard.writeText(color.innerHTML);
  copy_btn.innerHTML = 'Copied!';
  setTimeout(() => {
    copy_btn.innerHTML = 'Copy';
  }, 1000);
});