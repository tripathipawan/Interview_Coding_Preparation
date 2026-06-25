const nextbtn = document.querySelector('.next');
const prevbtn = document.querySelector('.prev');
const images = document.querySelectorAll('.img-box .img');


let current = 0;


function showImg() {
  images.forEach(img => img.style.display = 'none');
  images[current].style.display = 'block';
}

showImg();

prevbtn.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImg();
});

nextbtn.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImg();
});
