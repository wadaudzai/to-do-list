import listData from './listdata.js';
import localStorage from './localStorage.js';

const checkboxFunc = (li, index) => {
  li.classList.remove('incorrect');
  if (index.completed === false) {
    index.completed = true;
    localStorage.setStorage(listData);
  } else {
    index.completed = false;
    localStorage.setStorage(listData);
  }
};

export default checkboxFunc;