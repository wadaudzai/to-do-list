import createList from './createList.js';
import listData from './listdata.js';
import localStorage from './localStorage.js';

const addList = (event) => {
  const data = {
    description: event.target.value,
    completed: false,
    index: listData.length + 1,
  };
  createList(data);
  listData.push(data);
  localStorage.setStorage(listData);
};

export default addList;