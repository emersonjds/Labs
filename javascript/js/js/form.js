
adicionarPaciente.addEventListener("click", function (e) {
    e.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemDadosPaciente(form);
    var pacienteTr = montaTr(paciente);

    pacienteTr.classList.add("paciente");

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});

function obtemDadosPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var linha = document.createElement("tr");

    linha.appendChild(montaTd(paciente.nome, "info-nome"));
    linha.appendChild(montaTd(paciente.peso, "info-peso"));
    linha.appendChild(montaTd(paciente.altura, "info-altura"));
    linha.appendChild(montaTd(paciente.gordura, "info-gordura"));
    linha.appendChild(montaTd(paciente.imc, "info-imc"));

    return linha;
}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add = classe;

    return td;
}