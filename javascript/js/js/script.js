
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
        paciente.style.backgroundColor = "red";
        paciente.style.color = "#fff";
        tdIMC.innerHTML = "Peso Invalido";
        
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        paciente.style.backgroundColor = "red";
        paciente.style.color = "#fff";
        tdIMC.innerHTML = "Altura Invalida";
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdIMC.innerHTML = Math.round(imc);
    }
}





