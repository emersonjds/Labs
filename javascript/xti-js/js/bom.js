/* 
BOM - Browser Object Model
*/

//bom esta acessivel atraves do objeto window

window.onload = function() {
	window.alert("Teste");

	confirm("Tem certeza que deseja esta operação");

	prompt("Qual a tecnologia que voce mais gosta");

	console.log(tecnologia);

	window.open("Aula de Bom", "JS Master", "width=200", "height=200", "toobar=no", "location=no");
	cria aqueles alertas em forma de popup

	window.resizeTo(300,300); // redimennsionar a janela

	window.moveTo(300,300);


	//NAVIGATOR OBJECT
	var plugins = navigator.plugins;
	var p = " ";

	for(var i = 0; i < plugins.length; i++) {
		p+= plugins[i].name + "\n";
		console.log(p);
	}

	console.log(navigator.platform); // identifica a plataforma na qual o codigo esta rodado
	console.log(navigator.language);
	console.log(navigator.userAgent);

	//LOCATION
	console.log(location.href);
	console.log(location.protocol);

	//SCREEN -> Verificar sempre na documentação
	console.log(screen.width);
	console.log(screen.height);
	console.log(screen.pixelDepth);
	console.log(screen.colorDepth);
	console.log(screen.availWidth);

	//HISTORY
	console.log(history.length);
}