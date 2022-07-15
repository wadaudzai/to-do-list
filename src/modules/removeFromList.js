import listData from './listdata.js';
import localStorage from './localStorage.js';

const removeList = (btn, index) => {
  listData.splice(index.index - 1, 1);
  btn.parentElement.remove();
  for (let i = 0; i < listData.length; i += 1) {
    listData[i].index = i + 1;
  }
  localStorage.setStorage(listData);
};

export default removeList;