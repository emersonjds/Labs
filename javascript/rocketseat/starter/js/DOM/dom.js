function showAlert() {
    alert('Botao clicado')
}

// var inputElement = document.querySelector('#nome')

// busca pela propriedade da tag 
var inputElement = document.querySelector('input[name=nome]')

var btnElement = document.querySelector('.botao');

btnElement.onclick = function() {
    var text = inputElement.value;
    alert(text)
}
console.log(inputElement)