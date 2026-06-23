const box = document.querySelector(".password-box");
const btn = document.querySelector(".toggle-btn");

btn.addEventListener('click', () => {
  if (box.type === "password") {
    box.type = "text";
    btn.innerHTML = "Hide";
  } else if (box.type === "text") {
    box.type = "password";
    btn.innerHTML = "Show";
  }
});