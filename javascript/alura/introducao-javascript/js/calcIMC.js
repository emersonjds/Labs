var title = document.querySelector(".titulo");
title.textContent = "Maximo Nutriçäo";

var pacientes = document.querySelectorAll(".paciente"); //return an array with patients

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var tdIMC = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = validWeight(peso);
  var alturaEhValida = valideHeight(altura);

  if (!pesoEhValido) {
    console.log("peso invalido");
    pesoValido = false;
    tdIMC.textContent = "Peso invalido";
    paciente.classList.add("alertColor");
  }

  if (!valideHeight) {
    console.log("altura invalida");
    alturaValida = false;
    tdIMC.textContent = "Altura Invalida";
    paciente.classList.add("alertColor");
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdIMC.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validWeight(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function valideHeight(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
