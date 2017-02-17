/*
For In
 */

var numeros = new Array("um", "dois", "tres");

for (var i = 0; i < numeros.length; i ++) {
	console.log(numeros[i]);
}

for (i in numeros) {
	console.log(numeros[i]);
}

var Carro = {
	marca : "Chevrolet",
	cor : "azul",
	modelo : "350z"
}

for (var prop in Carro) {
	console.log(prop + " = " + Carro[prop]);
}