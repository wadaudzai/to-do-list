import './style.css';
import creatList from './modules/createList.js';
import addList from './modules/addToList.js';
import listData from './modules/listdata.js';
import localStorage from './modules/localStorage.js';
import removeList from './modules/removeFromList.js';

const input = document.querySelector('.input-field');
const clearInput = document.querySelector('.undo-btn');
const clearbtn = document.querySelector('.clear-btn');
const reset = document.querySelector('.reset-icon');

input.addEventListener('keypress', (e) => {
  if (input.value.trim() === '') {
    return null;
  } if (e.key === 'Enter') {
    e.preventDefault();
    addList(e);
    input.value = '';
  }
  return null;
});

clearInput.addEventListener('click', () => {
  input.value = '';
});

clearbtn.addEventListener('click', () => {
  const completedItems = listData.filter((item) => item.completed === true);
  completedItems.forEach((element) => {
    removeList(element);
  });
});

reset.addEventListener('click', () => {
  listData.forEach((element) => {
    element.completed = true;
  });
  const completedItems = listData.filter((item) => item.completed === true);
  completedItems.forEach((element) => {
    removeList(element);
  });
});

window.addEventListener('load', () => {
  localStorage.getStorage(listData);
  listData.forEach((child) => {
    creatList(child);
  });
});
