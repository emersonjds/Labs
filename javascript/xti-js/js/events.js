

//DOM NIVEL 0
window.onload = function () {
	var botao = document.getElementById("botao");
	botao.addEventListener("click", funcao, false);
	//primeiro parametro evento, segundo funcao, e terceiro se quer tratar o evento com propagacao
}



function funcao() {
	alert("Ola");
}