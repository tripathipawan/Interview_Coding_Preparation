const inputbox = document.querySelector('.input-box');
const addBtn = document.querySelector('.add-btn');
const lists = document.querySelector('.lists');

addBtn.addEventListener('click', () => {

  // 1. If inputbox empty return nothing
  if (inputbox.value === '') {
    return;
  }

  // 2. Create Element
  const li = document.createElement('li');
  const p = document.createElement('p');
  const deletebtn = document.createElement('button');

  // 3. Add Classes
  li.classList.add('list');
  p.classList.add('task');
  deletebtn.classList.add('delete-btn');

  // 4. Set Data
  p.innerHTML = inputbox.value;
  deletebtn.innerHTML = 'X';

  // 5. Append Childs
  lists.appendChild(li);
  li.appendChild(p);
  li.appendChild(deletebtn);

  // 5. Remove Tasks
  deletebtn.addEventListener('click', () => {
    li.remove();
  });

  // 6. Empty Input Box
  inputbox.value = '';

  });