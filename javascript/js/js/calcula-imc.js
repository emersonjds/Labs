
var pacientes = document.querySelectorAll(".paciente");
var linha = document.getElementsByTagName("tr");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
        tdIMC.innerHTML = "Peso Invalido";
    }

    if (!alturaValida) {
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

function validaPeso(peso) {
   if(peso >= 0 && peso < 1000) {
       return true;
   } else {
       return false;
   }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}




