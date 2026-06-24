const btn = document.getElementById('btn');
btn.innerHTML = '☀️ Light';


btn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    btn.innerHTML = "🌙 Dark";
  } else {
    btn.innerHTML = "☀️ Light";
  }
})