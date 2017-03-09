var titulo = document.querySelector(".titulo");

titulo.textContent = "Alterando o titulo";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

var imc = Math.round(peso / (altura * altura));

var resultadoCalculo = document.querySelector(".info-imc");

resultadoCalculo.innerHTML = imc;



