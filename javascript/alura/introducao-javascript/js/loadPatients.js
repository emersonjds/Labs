var loadPatients = document.querySelector("#load-patients");

loadPatients.addEventListener("click", function() {
  console.log("Aguarde, carregando dados");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function() {
    var resposta = xhr.responseText;
    var pacientes = JSON.parse(resposta);

    pacientes.forEach(paciente => {
      AddPatientsOnTable(paciente);
    });
  });
  xhr.send();
});
