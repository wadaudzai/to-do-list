import './style.css';

console.log('walid');

const listData = [
  {
    description: 'Work on project',
    completed: false,
    index: 0,
  },
  {
    description: 'Jog in the morning',
    completed: false,
    index: 1,
  },
  {
    description: 'eat a healthy breakfast',
    completed: false,
    index: 2,
  },
  {
    description: 'take a bus',
    completed: false,
    index: 3,
  },
  {
    description: 'study',
    completed: false,
    index: 4,
  },
  {
    description: 'work',
    completed: false,
    index: 5,
  },
];

const listContainer = document.querySelector('.list-container');
const funcWal = () => {
  for (let i = 0; i < listData.length; i += 1) {
    const taskList = document.createElement('li');
    taskList.classList.add('list');
    const todo = `
  <div class = "input-p">
<input type="checkbox" class="checkbox" id="${listData[i].index}">
        <p id="0" class="para-1">${listData[i].description}</p>
        </div>
        <i class="fa fa-ellipsis-v icon"></i>
`;

    listContainer.append(taskList);
    taskList.innerHTML += todo;
  }
};
funcWal();
