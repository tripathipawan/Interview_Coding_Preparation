const box = document.getElementById("input-box");
const num = document.getElementById("number");

box.addEventListener('input', () => {
  if (box.value.length >= 250) {
    box.value = box.value.slice(0, 250);
  }
  num.innerHTML = box.value.length;
});

