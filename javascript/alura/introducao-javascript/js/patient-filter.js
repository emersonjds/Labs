var campoFiltro = document.querySelector("#patient-filter");

campoFiltro.addEventListener("input", function() {
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      if (nome != this.value) {
        paciente.classList.add("hideELement");
      } else {
        paciente.classList.remove("hideELement");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("hideELement");
    }
  }
});
