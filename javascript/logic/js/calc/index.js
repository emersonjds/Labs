var number = "0";

function incluirDigito(value) {
  number === "0" ? (number = value) : (number += value);
  mostraNoDisplay(number);
}

function mostraNoDisplay(valor) {
  var display = document.getElementById("display");
  display.innerHTML = valor;
}

function limpar() {
  var display = document.getElementById("display");
  display.innerHTML = "0";
}
