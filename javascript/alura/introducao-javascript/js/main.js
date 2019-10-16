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

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("peso invalido");
    pesoValido = false;
    tdIMC.textContent = "Peso invalido";
    paciente.classList.add("alertColor");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("altura invalida");
    alturaValida = false;
    tdIMC.textContent = "Altura Invalida";
    paciente.classList.add("alertColor");
  }

  if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc.toFixed(2);
  }
}

var actionButton = document.querySelector("#adicionar-paciente");
console.log(actionButton);
actionButton.addEventListener("click", function(event) {
  event.preventDefault();
  criaPaciente();
});

function criaPaciente() {
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabalePacientes = document.querySelector("#tabela-pacientes");
  tabalePacientes.appendChild(pacienteTr);
}
