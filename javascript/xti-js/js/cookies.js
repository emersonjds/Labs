/* 
Working with Cookies
*/
window.onload = function() {

	var nome = readCookie("nome");

	if (nome == null) {
		nome = prompt("Qual o seu nome");
		writeCookie("nome", nome, 1);
	}

	document.write("Bem vindo ao sistema " + nome);
}


function writeCookie(name, value, days) {
	//Por default nao existe expiração de cookie 
	var expires = "";

	//Especifica o numero de dias para guardar o cookie
	
	if(days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString(); // converte a data em padrao internacional para string 
	}

	if(value != "" && value != null && value != "null") {
		//Define o cookie com o nome, valor e data de expiração
		document.cookie = name + "=" + value + expires + ";path=/";
	} 
}

function readCookie(name) {
	//Encontra o cookie especificado e retorna o seu valor
	
	var searchName = name + "=";
	var cookies = document.cookie.split(';');
	for (var i = 0; i<cookies.length; i++) {
		var c = cookies[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
			if (c.indexOf(searchName) == 0)
				return c.substring(searchName.length, c.length);
		}
	}
	return null;
}