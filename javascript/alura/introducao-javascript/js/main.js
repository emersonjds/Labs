var title = document.querySelector(".titulo");
title.textContent = "Maximo Nutriçäo";

var paciente = document.querySelector(".paciente"); //return an array os patients

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var tdIMC = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;

if (peso < 0 || peso > 1000) {
  console.log("peso invalido");
  pesoValido = false;
  tdIMC.textContent = "Peso invalido";
}

if (altura < 0 || altura > 3.0) {
  console.log("altura invalida");
  alturaValida = false;
  tdIMC.textContent = "Altura Invalida";
}

if (pesoValido && alturaValida) {
  var imc = peso / (altura * altura);
  tdIMC.textContent = imc;
}
