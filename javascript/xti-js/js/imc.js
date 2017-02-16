

console.log(peso);

function calcularIMC() {
	var formulario = document.getElementById("formulario");

	var peso = +formulario.peso.value;
	//o operador unario tranforma o retorno em caso de string em number
	var altura = +formulario.altura.value;

	var imc = (peso / (altura * altura));

	formulario.imc.value = imc.toFixed(2);

	var paragrafo = document.getElementById("msgIMC");
	

	if (imc <= 20) {
		paragrafo.innerHTML = "Peso Ideal";
	} else if (imc > 20 && imc <= 25) {
		paragrafo.innerHTML = "Sobrepeso";
	} else {
		paragrafo.innerHTML = "Obeso Maldito";
	}



}