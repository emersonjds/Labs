/* 
Do While
*/


var numeros = [1, 2, 3, 4, 5, 6, 7];

var i = 0;

while ( i <= numeros.length) {
	console.log(i);
	i++;
}

do {
	console.log("Testando" + i + "\n");
	i++;
} while( i  <= numeros.length);