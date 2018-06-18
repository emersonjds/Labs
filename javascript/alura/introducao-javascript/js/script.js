
console.log('documento carregado');

var titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Maximo Nutrição';
console.log('requisições de chamadas pre ordendas');

var paciente = document.querySelector('#primeiro-paciente');

var pesoPaciente = paciente.querySelector('.info-peso');
var peso = pesoPaciente.textContent;

var alturaPaciente = paciente.querySelector('.info-altura');
var altura = alturaPaciente.textContent;

var alturaValida = true;
var pesoValido = true;

var infoIMC = document.querySelector('.info-imc');

if (peso <= 0 || peso >= 1000) {
    console.log('peso invalido');
    pesoValido = false;
    infoIMC.textContent = 'Peso Invalido';
}

if (altura <= 0 || altura >= 3.00) {
    console.log('altura invalida');
    alturaValida = false;
    infoIMC.textContent = 'Altura Invalida';
}

if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    infoIMC.textContent = imc;
}









