var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//para definir valor padrao basta passar outra propriedade com a propriedade ||
// deste forma o JS entende que caso nao consiga renderizar ele inicializa o array vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

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
  saveTodo();
}

buttonElement.onclick = addTodo; // receite function 

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveTodo();
}

function saveTodo() {
  localStorage.setItem('list_todos', JSON.stringify(todos))
}

renderTodos();