/* 
Ajax and XMLHTTPResquest

Asyncrhonous Javascript and XML
*/

window.onload = function() {

	document.getElementById("btn-teste").onclick = function() {
		requisitarUrl("http://fipeapi.appspot.com/api/1/carros/marcas.json");
		return false;
	}

	function carregando(c) {
		while(c.hasChildNodes()) {
			c.removeChild(c.lastChild);
		}

		var img = document.createElement("img");
		img.setAttribute("src", "../ajax");
		c.appendChild(img);
	}

	function mostrar(ajax) {
		var resposta = document.getElementById("resposta");

		while(resposta.hasChildNodes()) {
			resposta.removeChild(c.lastChild);
		}
		
		var xml = new XML(ajax.responseText);
		resposta.appendChild(document.createTextNode(xml.url));
	}

	function requisitarUrl(url) {
		var ajax = iniciaAjax();

		carregando(document.getElementById("resposta"));

		ajax.onreadystatechange = function() { //informa se houve alguma resposta do servidor
			if (ajax.readyState == 4) { //informa o status da comunicação com o servidor
				mostrar(ajax);
			}

			ajax.open("POST", url);
			ajax.send(null);
		}
	}

	function iniciaAjax() {
		var ajax = null;

		if(window.XMLHTTPResquest) {
			ajax = new XMLHTTPResquest();
		} else if (window.ActiveXObject) {
			try {
				ajax = new ActiveXObject("Msxml2.XMLHTTP");		
			} catch(e) {
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		return ajax;
	}
}