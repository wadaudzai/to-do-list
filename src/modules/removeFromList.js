import listData from './listdata.js';
import localStorage from './localStorage.js';

const removeList = (index) => {
  const thrashIcon = document.querySelectorAll('.deleteIcon');
  const thrashLi = Array.from(thrashIcon);
  if (index) {
    thrashLi[index.index - 1].parentElement.remove();

    listData.splice(index.index - 1, 1);
    for (let i = 0; i < listData.length; i += 1) {
      listData[i].index = i + 1;
    }
    localStorage.setStorage(listData);
  } else {
    thrashLi[index.index - 1].parentElement.classList.add('incorrect');
  }
};

export default removeList;