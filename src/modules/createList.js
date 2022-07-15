import removeList from './removeFromList.js';

const createList = (index) => {
  // select the ul where the li should be added.
  const ul = document.querySelector('.list-container');
  // create li
  const li = document.createElement('li');
  li.classList.add('list');
  // create checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  // create a span element
  const input = document.createElement('input');
  input.classList.add('input');
  input.setAttribute('readonly', true);
  input.value = `${index.description}`;

  const deleteIcon = document.createElement('img');
  deleteIcon.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL9JREFUSEvtlc0NwjAMhV8mYQRgE07OGjABrBOfOgpsUCYxqtRKoU3tkDTi0tyi/Hzv2UqeQ+PhGt8PFRBCuDjn7gBOK0J6Ebl577s1oSqAmXsAB8Plk4jOpQAZDhJRUggzq+vDWcvBtoBJUW3jY8dfDpoDJuU5tY1davuLm7cpYK7QmsfwLAfWhdUl2gGLd/VrSfYemF9TdYksQgkgJ2jm3BcRLZIv+ZLHqHwAOFrqx/W3iFxT0fnf0M9Ur277APlk1BlhQ27RAAAAAElFTkSuQmCC');
  deleteIcon.setAttribute('alt', 'delete icon');

  li.append(checkbox, input, deleteIcon);
  ul.appendChild(li);

  deleteIcon.addEventListener('click', () => {
    removeList(deleteIcon, index);
  });
};

export default createList;