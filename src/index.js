import './style.css';
import { getUsers } from './common/usersAPI';

getUsers().then(json => console.log(json));

/*
class Todo {
    constructor(task,checkbox) {
        this.task = task;
        this.checkbox = checkbox;
    }
}*/

class UI{
  static displaytodos () {
      const todolist = [
        {
         task: 'create a html page',
         checkbox: 'true',
        },
        {
         task: 'create a css page',
         checkbox: 'true',
        },
        {
         task: 'create a javascript page',
         checkbox: 'false',
        }
    ];
    
    const todos = todolist;
    todos.forEach((todo)=> UI.addtodos(todo));
    console.log(todos);
 }

   static addtodos (todo) {
    const todolist = document.createElement('li');
    const checkbox =document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.innerHTML = `<div></div>`;
    const newtodo = document.createElement('p');
    newtodo.classList.add('todo-data');
    newtodo.innerHTML = todo.task;
    const remove = document.createElement('span')
    remove.classList.add('delete');
    remove.innerHTML = '&hellip;';
    todolist.appendChild(checkbox);
    todolist.appendChild(newtodo);
    todolist.appendChild(remove);
    list.appendChild(todolist);
   }
   
}

// const todo = new Todo(task,checkbox);
const list = document.querySelector('.todo-list');
document.addEventListener('DOMContentLoaded', UI.displaytodos);

/*
const inputDtata = document.querySelector('#todo');
const add = document.querySelector('#add-todo');
const outputData = document.querySelector('.output-container');

const addtodos = (e) => {
    //e.preventDefault;
    const todos = document.createElement('li');
    const checkbox =document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = "checkbox";
    const newtodo = document.createElement('p');
    newtodo.classList.add('todo-data');
    newtodo.innerHTML = inputDtata.value;
    const remove = document.createElement('span')
    remove.classList.add('delete');
    remove.innerText = '&hellip;';

    todos.appendChild(checkbox);
    todos.appendChild(newtodo);
    todos.appendChild(remove);

    outputData.appendChild(todos);

    inputDtata.value = '';

 }

add.addEventListener('click', addtodos);
inputDtata.addEventListener('keypress', (event)=> {
    if (event.key == "Enter") {
        addtodos();
    }
});
*/