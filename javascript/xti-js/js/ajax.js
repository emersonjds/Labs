/* 
Ajax and XMLHTTPResquest

Asyncrhonous Javascript and XML
*/

window.onload = function() {
	
	var btn = document.getElementById("btn-ajax");

	var resposta = document.getElementById("resposta");

	btn.onclick = function() {
		var ajax = new XMLHttpRequest(); //Criação do objeto ajax

	ajax.onreadystatechange = function() { //informa se houve alguma resposta do servidor
		if (ajax.readyState == 4) { //informa o status da comunicação com o servidor
			r.appendChild(document.createTextNode(ajax.responseText))
	}

	ajax.open = "GET", "https://api.trello.com/1/boards/5f5ef20693d16346b6cd76e61c191b17?lists=open&list_fields=name&fields=name,desc&key=[application_key]&token=[7b774677de17b2c748cfec8c22747868065e8b163d7dfe1a05a5a473fd5d4675]", true;
	ajax.send(null);

	return false;	
}

}