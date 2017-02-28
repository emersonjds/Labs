/*
Temporizadores
 */

window.onload = function() {
	setInterval(timer, 1000); // funcao e o tempo determinado
}

function timer() {
	var agora = new Date();
	var horas = agora.getHours() + " : " + agora.getMinutes() + " : " + agora.getSeconds();
	document.getElementById("horas").innerHTML = horas;
}