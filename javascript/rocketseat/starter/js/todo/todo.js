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
    var linkElement = document.createElement('a');
    var textLink = document.createTextNode(' X');

    linkElement.appendChild(textLink)
    linkElement.setAttribute('href', '#');
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', `deleteTodo(${pos})`);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
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

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}

renderTodos();