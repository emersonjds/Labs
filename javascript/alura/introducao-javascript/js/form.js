var actionButton = document.querySelector("#adicionar-paciente");
console.log(actionButton);
actionButton.addEventListener("click", function(event) {
  event.preventDefault();
  criaPaciente();
});

function criaPaciente() {
  var form = document.querySelector("#form-adiciona");
  var paciente = getPatientsOfForm(form);
  var pacienteTr = mountTr(paciente);
  var tabalePacientes = document.querySelector("#tabela-pacientes");
  tabalePacientes.appendChild(pacienteTr);
  form.reset(); //clean fields of form
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
