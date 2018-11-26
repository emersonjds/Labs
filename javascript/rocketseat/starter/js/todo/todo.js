var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer Café',
  'Acessar comunidade',
];

function renderTodos() {
  listElement.innerHTML = '';
  
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    var deleteLink = document.createElement('a');
    var textLink = document.createTextNode(' X');

    deleteLink.appendChild(textLink)
    deleteLink.setAttribute('href', '#');

    todoElement.appendChild(todoText);
    todoElement.appendChild(deleteLink);
    listElement.appendChild(todoElement);

  }
}

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
}

buttonElement.onclick = addTodo; // receite function 

renderTodos();