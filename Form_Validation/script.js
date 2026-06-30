const btn = document.getElementById('btn');
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('con-password');
const msg = document.getElementById('msg');


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!emailPattern.test(email.value)) {
    msg.innerHTML = 'Invalid email format';
    msg.style.color = '#ff4c39';
    return;
  }

  if (password.value.length < 6 || confirmPassword.value.length < 6) {
    msg.innerHTML = 'Password must be at least 6 characters';
    msg.style.color = '#ff4c39';
    return;
  }

  if (password.value !== confirmPassword.value) {
    msg.innerHTML = 'Passwords do not match';
    msg.style.color = '#ff4c39';
    return;
  }
  msg.innerHTML = '✅ Form submitted successfully!';
  msg.style.color = '#39ff46';
  form.reset();

  setTimeout(() => {
    msg.innerHTML = '';
  }, 2000)
});