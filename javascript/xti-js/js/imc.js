

console.log(peso);

function calcularIMC() {
	var formulario = document.getElementById("formulario");

	var peso = +formulario.peso.value;
	//o operador unario tranforma o retorno em caso de string em number
	var altura = +formulario.altura.value;

	var imc = (peso / (altura * altura));

	formulario.imc.value = imc.toFixed(2);
}