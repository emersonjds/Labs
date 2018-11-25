
var createBox = document.querySelector('.boxCreate');

createBox.onclick = function () {
  var box = document.createElement('div');
  box.setAttribute('class', 'quadrado');
  var app = document.querySelector('#app');
  var linha = document.createElement('hr');
  box.style.height = '100px';
  box.style.width = '100px';
  box.style.backgroundColor = '#f00';
  app.appendChild(linha);
  app.appendChild(box);

  var changeColor = document.querySelector('.quadrado');
  changeColor.onclick = function () {
    changeColor.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var newColor = getRandomColor();

var nomes = ['Diego', 'Gabriel', 'Lucas'];
var listElement = document.querySelector('ul');
for (nome of nomes) {
  var liElement = document.createElement('li');
  var textElement = document.createTextNode(nome);
  liElement.appendChild(textElement);
  listElement.appendChild(liElement);
}

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
function addItem(text) {
  var liElement = document.createElement('li');
  var textElement = document.createTextNode(text);
  liElement.appendChild(textElement);
  listElement.appendChild(liElement);
}
function adicionar() {
  addItem(inputElement.value);
  inputElement.value = "";
}
for (nome of nomes) {
  addItem(nome);
}

function returnDate() {
  return new Date()
}

function getPersonByID(id) {
  return id;
}






