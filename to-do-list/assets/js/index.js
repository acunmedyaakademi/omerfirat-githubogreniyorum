let btn = document.querySelector('#todo-list-add');
let todolist = document.querySelector('#todo-list');
let liste = document.querySelector('#todo-list-items');

function listEkle() {
  liste.innerHTML += '<li>' + todolist.value + '</li>';
  todolist.value = '';
}

btn.addEventListener('click', listEkle);

