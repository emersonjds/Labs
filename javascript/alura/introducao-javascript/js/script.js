
console.log('documento carregado');

var titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Maximo Nutrição';
console.log('requisições de chamadas pre ordendas');

var paciente = document.querySelector('#primeiro-paciente');
var pesoValido = true;
var alturaValida = true;
var pesoPaciente = paciente.querySelector('.info-peso').textContent;
var alturaPaciente = paciente.querySelector('.info-altura').textContent;

if (pesoPaciente < 0 || pesoPaciente > 1000) {
    console.log('peso invalido');
    pesoValido = false;
    pesoPaciente.textContent = 'Peso invalido';
}


if (alturaPaciente < 0 || alturaPaciente > 3.00) {
    console.log('altura invalida');
    alturaValida = false;
    alturaPaciente.textContent = 'ALtura Invalida';
}

if (alturaValida && pesoValido) {
    var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
    var infoIMC = document.querySelector('.info-imc');
    infoIMC.textContent = imc;
}



