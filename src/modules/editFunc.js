import listData from './listdata.js';
import localStorage from './localStorage.js';

const edit = (input, index) => {
  input.removeAttribute('readonly');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      input.value = e.target.value;
      input.setAttribute('readonly', true);
      input.classList.toggle('active');
      listData[index.index - 1].description = input.value;
      localStorage.setStorage(listData);
    }
  });
};
export default edit;