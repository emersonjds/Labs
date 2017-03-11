
var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;

var altura = paciente.querySelector(".info-altura").textContent;

var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    pesoValido = false;
    paciente.querySelector(".info-peso").textContent = "Peso invalido";
}

if (altura <= 0 || altura >= 3.00) {
    alturaValida = false;
    paciente.querySelector(".info-altura").textContent = "Altura Invalida";
}

if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    document.querySelector(".info-imc").innerHTML = imc;
} else {
    document.querySelector(".info-imc").innerHTML = "ERROR";
}



