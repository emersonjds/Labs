var actionButton = document.querySelector("#adicionar-paciente");
console.log(actionButton);
actionButton.addEventListener("click", function(event) {
  event.preventDefault();
  criaPaciente();
});

function criaPaciente() {
  var form = document.querySelector("#form-adiciona");

  var paciente = getPatientsOfForm(form);

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso, altura);

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tabalePacientes = document.querySelector("#tabela-pacientes");
  tabalePacientes.appendChild(pacienteTr);
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
