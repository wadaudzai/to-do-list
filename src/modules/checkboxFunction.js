const checkboxFunc = (li, index) => {
  li.classList.remove('incorrect');
  if (index.completed === false) {
    index.completed = true;
  } else {
    index.completed = false;
  }
};

export default checkboxFunc;