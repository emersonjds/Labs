var campoInput = document.querySelector("#filtrar-tabela");

campoInput.addEventListener("input", function() {
	
	var pacientes = document.querySelectorAll(".paciente");

	if (this.value.length > 0) {
		pacientes.forEach(function(paciente) {
			if (campoInput.value == paciente.querySelector(".info-nome").textContent) {
				paciente.classList.remove("invisivel");
			}else {
				paciente.classList.add("invisivel");
			}
		// console.log(paciente.querySelector(".info-nome").textContent);
	});	
	}else {
		pacientes.forEach(function(paciente) {
			paciente.classList.remove("invisivel");
		});
	}
});



