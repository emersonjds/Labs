var xhr = new XMLHttpRequest();

xhr.open('GET', 'https:/api.github.com/users/emersonjds');
xhr.send(null);

xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) { 
		// verifica se o status da request foi ok
		console.log(JSON.parse(xhr.responseText));
	}
}