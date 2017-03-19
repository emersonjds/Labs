
adicionarPaciente.addEventListener("click", function (e) {
    e.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemDadosPaciente(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {

        exibeMensagensDeErros(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);
    
    pacienteTr.classList.add("paciente");

    form.reset();

    var ul = document.querySelector("mensagens-erro");
    ul.innerHTML = " ";

});

function exibeMensagensDeErros(erros) {
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = " ";

    erros.forEach(function (erro) {
        var li = document.createElement("li");

        li.textContent = erro;
        ul.classList.add("alert");
        ul.classList.add("alert-danger");
        ul.appendChild(li);
    });
}

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

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0 )
        erros.push("O nome do paciente nao pode ser em branco");

    if (!validaPeso(paciente.peso))
        erros.push("Peso inválido");

    if (!validaAltura(paciente.altura))
        erros.push("Altura Inválida");

    if (paciente.gordura <= 0 )
        erros.push("Gordura não aceita valores em branco e ou negativos");

    if(paciente.peso.length <= 0 )
        erros.push("Peso nao pode possuir valores em branco e ou negativos");

    if(paciente.altura.length <= 0 )
        erros.push("Altura nao pode possuir valores em branco e ou negativos");

    return erros;

}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}