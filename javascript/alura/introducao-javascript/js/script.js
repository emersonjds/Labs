
console.log('documento carregado');

var titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Maximo Nutrição';
console.log('requisições de chamadas pre ordendas')

var paciente = document.querySelector('#primeiro-paciente');
var pesoPaciente = paciente.querySelector('.info-peso').textContent;
var alturaPaciente = paciente.querySelector('.info-altura').textContent;

var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
var infoIMC = document.querySelector('.info-imc');

infoIMC.textContent = imc
