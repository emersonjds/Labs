var loadPatients = document.querySelector("#load-patients");

loadPatients.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function() {
    var ajaxError = document.querySelector("#ajax-error");
    if (xhr.status === 200) {
      ajaxError.classList.add("hideELement");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(paciente => {
        AddPatientsOnTable(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      ajaxError.classList.remove("hideELement");
    }
  });
  xhr.send();
});
