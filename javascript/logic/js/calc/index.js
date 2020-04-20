var n1 = "0";
var operacao = null;
var n2 = "";
var clicadoEmIgual = false;

function incluirDigito(value) {
  if (operacao !== null) {
    n2 += value;
    mostraNoDisplay(n2);
  } else {
    n1 === "0" ? (n1 = value) : (n1 += value);
    mostraNoDisplay(n1);
  }
}

function calcular() {
  var nCalculado = 0;
  var _n1 = parseFloat(n1);
  var _n2 = parseFloat(n2);
  switch (operacao) {
    case "+":
      nCalculado = _n1 + _n2;
      break;
    case "-":
      nCalculado = _n1 - _n2;
      break;
    case "*":
      nCalculado = _n1 * _n2;
      break;
    case "/":
      nCalculado = _n1 / _n2;
      break;
  }
  return nCalculado;
}

function mostraNoDisplay(valor) {
  var display = document.getElementById("display");
  display.innerHTML = valor;
}

function limpar() {
  var display = document.getElementById("display");
  display.innerHTML = "0";
}

function iniciarCalculo(simbolo) {
  if (clicadoEmIgual) {
    clicadoEmIgual = false;
    n2 = "";
  }

  if (operacao === null || n2 === "") {
    operacao = simbolo;
  } else {
    // already contains n1, operation and n2
    var result = calcular();
    n1 = result;
    operacao = simbolo;
    n2 = "";
    mostraNoDisplay(n1);
  }

  console.log(n1, operacao, n2);
}

function finalizarCalculo() {
  clicadoEmIgual = true;
  var result = calcular();
  n1 = result;
  mostraNoDisplay(n1);
}
