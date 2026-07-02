const quoteBox = document.querySelector('.quote-box');
const btn = document.querySelector('.btn');


const API = 'https://dummyjson.com/quotes';

let allQuotes = [];

async function callAPI() {
  const data = await fetch(API);
  const res = await data.json();

  allQuotes = res.quotes;
  showRandom();
}

function showRandom() {
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  quoteBox.innerHTML = allQuotes[randomIndex].quote;
}

  callAPI();

btn.addEventListener('click', () => {
  showRandom()
});
