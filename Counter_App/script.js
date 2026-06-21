let num = document.getElementById("num");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const resetBtn = document.getElementById("reset");

let data = 0;

addBtn.addEventListener("click", () => {
  data = data + 1;
  num.innerHTML = data;

});

subBtn.addEventListener("click", () => {
  if (data <= 0) {
    data = 0;
    num.innerHTML = 0;
  } else {
    data = data - 1;
    num.innerHTML = data;
  }
});

resetBtn.addEventListener("click", () => {
  data = 0;
  num.innerText = 0;
});