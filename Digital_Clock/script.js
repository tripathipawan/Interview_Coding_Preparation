const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const period = document.querySelector('.period');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];




function updateClock() {
  const time = new Date();
  const pad = (n) => n < 10 ? `0${n}` : `${n}`;
  const hou = time.getHours();
  hou > 12 ? period.innerHTML = "pm" : period.innerHTML = "am";
  const timeperiod = hou % 12 || 12;

  hour.innerHTML = pad(timeperiod);
  minute.innerHTML = pad(time.getMinutes());
  second.innerHTML = pad(time.getSeconds());
  day.innerHTML = days[time.getDay()];
  date.innerHTML = pad(time.getDate());
  month.innerHTML = months[time.getMonth()];
  year.innerHTML = pad(time.getFullYear());
}

updateClock();

setInterval(updateClock, 1000);