const search = document.getElementById('search-box');
const lists = document.getElementById('all-list');
const msg = document.querySelector('.bottom-bar');
const allLi = lists.querySelectorAll('li');

search.addEventListener('input', () => {
  const searchValue = search.value.toLowerCase();
  let found = false;

  allLi.forEach((e) => {
    const name = e.innerHTML.toLowerCase();

    if (name.includes(searchValue)) {
      e.style.display = 'block';
      found = true;
    } else {
      e.style.display = 'none';
    }
  });
  const oldMsg = document.getElementById('notFound');
  if (oldMsg) oldMsg.remove();
  if (!found) {
    const nofind = document.createElement('h2');
    nofind.setAttribute('id', 'notFound');
    nofind.innerHTML = 'No results found';
    msg.appendChild(nofind);
  }
});