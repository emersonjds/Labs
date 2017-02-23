/*
Functions
 */

function somar() {
	document.write(2 + 2 );
}

//funcao declarativa
function sum(x, y) {
	document.writeln(x + y);
}

sum(10,20);

//anonymous function
var somar2 = new Function("x, y, z", " x + y + z;");

//literal function
var multiplicar2 = function(x,y) {
	return x * y;
}

document.getElementById("anonima").onclick = function() {
	alert("teste");
}
