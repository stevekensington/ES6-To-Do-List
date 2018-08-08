// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.to-do-tasks');
const addBtn = document.querySelector('#add-task');
const clearBtn = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks);
  addBtn.addEventListener('click', addTask);
  form.addEventListener('submit', addTask);
  clearBtn.addEventListener('click', clearTasks);
  taskList.addEventListener('click', removeTask);
  filter.addEventListener('keyup', filterTasks);
}

// Load all event listeners
loadEventListeners();

// Get tasks from local storage
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
    document.getElementById('task-list').style.display = 'none';
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    document.getElementById('task-list').style.display = 'block';
  }

  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement('li');
    li.className = 'to-do__tasks-item';
    li.appendChild(document.createTextNode(task));

    // Create new link element
    const link = document.createElement('a');
    link.className = 'to-do__tasks-delete right-align';
    link.innerHTML = '<img src="images/menu-close-icon.svg" width="22px" height="22px" alt="Delete Item">';
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Enter a task name');
  } else {
    document.getElementById('task-list').style.display = 'block';
    // Create li element
    const li = document.createElement('li');
    li.className = 'to-do__tasks-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');
    link.className = 'to-do__tasks-delete right-align';
    link.innerHTML = '<img src="images/menu-close-icon.svg" width="22px" height="22px" alt="Delete Item">';
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';
  }

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('to-do__tasks-delete')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks
function clearTasks() {
  if(confirm('Are you sure?')) {
    // Clear from UI
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    // Clear from local storage
    clearTasksFromLocalStorage();
    document.getElementById('task-list').style.display = 'none';
  }
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.to-do__tasks-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';

    }
  });

}
