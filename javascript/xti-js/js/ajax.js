/* 
Ajax and XMLHTTPResquest

Asyncrhonous Javascript and XML
*/

window.onload = function() {

	document.getElementById("btn-teste").onclick = function() {

		var ajax = new XMLHttpRequest(); //Criação do objeto ajax
		var resposta = document.getElementById("resposta");

		ajax.onreadystatechange = function() { //informa se houve alguma resposta do servidor
			if (ajax.readyState == 4) { //informa o status da comunicação com o servidor
				console.log("a requisição chegou bonitao");
				resposta.appendChild(document.createTextNode(ajax.responseText));
			}

			ajax.open("POST", "../teste.txt");
			ajax.send(null);

			return false;
		}
	}
}