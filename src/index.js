import './style.css';
import creatList from './modules/createList.js';
import addList from './modules/addToList.js';
import listData from './modules/listdata.js';
import localStorage from './modules/localStorage.js';

const input = document.querySelector('.input-field');

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

window.addEventListener('load', () => {
  localStorage.getStorage(listData);
  listData.forEach((child) => {
    creatList(child);
  });
});
