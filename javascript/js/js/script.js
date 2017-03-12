
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
        var imc = peso / (altura * altura);
        tdIMC.innerHTML = Math.round(imc);
    }
}

var adicionarPaciente = document.querySelector("#adicionar-paciente");

console.log(linha);


adicionarPaciente.addEventListener("click", function(e){
    e.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nomeDigitado = form.nome.value;
    var pesoDigitado = form.peso.value;
    var alturaDigitada = form.altura.value;
    var taxaGordura = form.gordura.value;

    var linha = document.createElement("tr");

    var nomeTr = document.createElement("td");
    var pesoTr = document.createElement("td");
    var alturaTr = document.createElement("td");
    var taxaGorduraTr = document.createElement("td");
    var imcTr = document.createElement("td");

    nomeTr.textContent = nomeDigitado;
    pesoTr.textContent = pesoDigitado;
    alturaTr.textContent = alturaDigitada;
    taxaGorduraTr.textContent = taxaGordura;
    imcTr.textContent = 0 ;
    
    linha.appendChild(nomeTr);
    linha.appendChild(pesoTr);
    linha.appendChild(alturaTr);
    linha.appendChild(taxaGorduraTr);
    linha.appendChild(imcTr);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(linha);

    limpaCampos();
});


function limpaCampos() {
    var nomeDigitado = " ";
    var pesoDigitado = " ";
    var alturaDigitada = " ";
    var taxaGordura = " ";
}





