import './style.css';

class TODO {
  constructor(description, index, completed) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
}
// query selectors
const forms = document.querySelector('#form-1');
const inputData = document.querySelector('#todo-input');
const list = document.querySelector('.todo-list');

let todos = [];
todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
const addTolocalStorage = (inputText) => {
  todos.push(inputText);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const gettodos = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const todolist = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = 'value';
    checkbox.checked = todo.completed;
    checkbox.id = index + 1;
    const newtodo = document.createElement('input');
    newtodo.classList.add('todo-data');
    newtodo.value = todo.description;
    newtodo.id = `task${index + 1}`;
    const remove = document.createElement('span');
    remove.classList.add('delete');
    remove.innerHTML = '&hellip;';
    const dustbin = document.createElement('span');
    dustbin.classList.add('dustbin');
    dustbin.classList.add('hide');
    dustbin.innerHTML = '<i class="material-icons dustbin">delete</i>';
    todolist.appendChild(checkbox);
    todolist.appendChild(newtodo);
    todolist.appendChild(remove);
    todolist.appendChild(dustbin);
    list.appendChild(todolist);
    if (todo.completed) {
      newtodo.classList.add('line');
    }
    remove.addEventListener('click', () => {
      remove.classList.add('hide');
      dustbin.classList.remove('hide');
    });
    dustbin.addEventListener('click', () => {
      todos.splice(index, 1);
      todos.forEach((todo, index) => {
        todo.index = index + 1;
      });
      localStorage.setItem('todos', JSON.stringify(todos));
      window.location.reload();
    });
    newtodo.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        todos[index].description = newtodo.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        gettodos();
      }
    });
  });

  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach((e) => {
    e.addEventListener('change', () => {
      todos.forEach((element) => {
        if (element.index.toString() === e.id) {
          element.completed = e.checked;
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      });

      const lineTask = document.getElementById(`task${e.id}`);
      if (e.checked) {
        e.classList.add('line');
        lineTask.classList.add('line');
      } else {
        e.classList.remove('line');
        lineTask.classList.remove('line');
      }
    });
  });

  return todos;
};

const createtodo = document.querySelector('#form-1');
createtodo.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputData.value) {
    const description = inputData.value;
    let index;
    if (localStorage.getItem('todos') === null) {
      index = 1;
    } else {
      index = (JSON.parse(localStorage.getItem('todos'))).length + 1;
    }

    const todo = new TODO(description, index, false);

    addTolocalStorage(todo);
    inputData.value = '';
    gettodos();
  }
});

const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
  const filteredArray = (JSON.parse(localStorage.getItem('todos'))).filter((item) => !item.completed);

  filteredArray.forEach((e, index) => {
    e.index = index + 1;
  });

  localStorage.setItem('todos', JSON.stringify(filteredArray));

  window.location.reload();
});

document.addEventListener('DOMContentLoaded', gettodos);