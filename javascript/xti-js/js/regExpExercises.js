function validar() {
	var formulario = document.getElementById("formulario");

	var cpf = formulario.cpf; // recuperação implicita do valor
	var email = formulario.email;

	var reCPF = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;
	var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(reCPF.test(cpf.value)) {
		cpf.value = cpf.value.replace(reCPF, "$1.$2.$3-$4");
	} else {
		throw "CPF invalido digite novamente, informe o cpf sem pontos ou traços";
	}

	if (!regEmail.test(email.value)) {
		document.writeln("Email invalido");
	}
}