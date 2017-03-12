
var pacientes = document.querySelectorAll(".paciente");
var linha = document.getElementsByTagName("tr");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
        tdIMC.innerHTML = "Peso Invalido";
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
        tdIMC.innerHTML = "Altura Invalida";
    }

    if (pesoValido && alturaValida) {
        var imc = calculaIMC(peso, altura);
        tdIMC.innerHTML = imc;
    }
}

var adicionarPaciente = document.querySelector("#adicionar-paciente");

function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}




