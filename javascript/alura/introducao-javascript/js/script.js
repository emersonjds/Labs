
console.log('documento carregado');

var titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Maximo Nutrição';
console.log('requisições de chamadas pre ordendas');

var paciente = document.querySelector('#primeiro-paciente');

var pesoPaciente = paciente.querySelector('.info-peso');
var peso = pesoPaciente.textContent;

var alturaPaciente = paciente.querySelector('.info-altura');
var altura = alturaPaciente.textContent;

var infoIMC = document.querySelector('.info-imc');

var imc = pesoPaciente / (alturaPaciente * alturaPaciente);

infoIMC.textContent = imc;

if (pesoPaciente < 0 || pesoPaciente > 1000)
    console.log('peso invalido')





