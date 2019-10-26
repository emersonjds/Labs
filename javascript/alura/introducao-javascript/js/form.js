var actionButton = document.querySelector("#adicionar-paciente");

actionButton.addEventListener("click", function(event) {
  event.preventDefault();
  criaPaciente();
});

function criaPaciente() {
  var form = document.querySelector("#form-adiciona");
  var paciente = getPatientsOfForm(form);

  var pacienteTr = mountTr(paciente);

  var erros = validPatient(paciente);

  if (erros.length > 0) {
    exibeMensagemDeErros(erros);
    return;
  }

  var tabalePacientes = document.querySelector("#tabela-pacientes");
  tabalePacientes.appendChild(pacienteTr);
  form.reset(); //clean fields of form

  var mensagensDeErro = document.querySelector("#mensagens-de-erro");
  mensagensDeErro.innerHTML = "";
}

function getPatientsOfForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };

  return paciente;
}

function mountTr(paciente) {
  var pacienteTr = document.createElement("tr");

  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(mountTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(mountTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(mountTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(mountTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(mountTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function mountTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validPatient(paciente) {
  var erros = [];

  if (!validWeight(paciente.peso)) erros.push("Peso Incorreto");

  if (!valideHeight(paciente.altura)) erros.push("Altura Invalida");

  if (paciente.nome.length === 0) {
    erros.push(" O nome nao pode ser em branco ");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura do paciente nao pode ser em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("O peso nao pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("A altura nao pode ser em branco");
  }

  return erros;
}

function AddPatientsOnTable(patient) {
  var pacienteTr = mountTr(patient);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErros(erros) {
  var ul = document.querySelector("#mensagens-de-erro");
  ul.innerHTML = "";
  erros.forEach(erro => {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
