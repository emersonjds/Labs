/*
Multimensional Arrays
 */

var pessoas = ["Emerson", "Maria", "Jose"];
var membros = new Array();

membros[0] = new Array("Maria Clara", "mulher");

console.log(membros[0]);
document.writeln(membros[0] + "</br>");

var nomeSexo = [ ["EMERSON", "M"], ["Sandra", "F"] ];

console.log(nomeSexo[[0][0]]);

for (var i = 0; i <membros.lenght; i++) {
	for (var j = 0; j < membros.lenght; j++) {
		console.log(membros[i][j]);
	}
}


var arr3 = [ 
	["Sandra", "F"] , 
	[ ["Curso JS", "Array Multidimensional"] ] 
];

console.log(arr3[1][0][0]); //array de 3 dimensoes


//Array Associativo
var pessoa = {  //criado com chaves da mesma forma que um objeto e acessado por pontou ou []
	nome : "Emerson",
	idade : "27"
}
console.log(pessoa.nome);

//Advanced Functions
//Every -> Utilizada para verificar se todos os elementos do array sao do mesmo tipo

var frutas = ["banana", "maça", "laranja"];

function todos(elemento, indice, objeto) {
	return (typeof(elemento == "string"));
}

console.log(frutas.every(todos));

//some -> verifica se pelo menos 1 elemento satisfaz alguma condição

var frutas2 = ["banana", "maça", "laranja"];

function todos2(elemento, indice, objeto) {
	return (typeof(elemento == "number"));
}

console.log(frutas2.some(todos2));

//Filter -> Filtra o array com base em uma função retornando o array resultante do filtro

var carros = ["Meriva", "Corsa", "Palio", "BMW"];

function busca(elemento, indice, objeto) {
	return (elemento.indexOf("io") > 0 );
}

console.log(carros.filter(busca));


// MAP -> utilizando para alterar os elementos do array

var cor = ["amarelo", "azul", "verde", "vermelho"];

function cores(elemento, indice, objeto) {
	return (elemento += " sz JS");
}

console.log(cor.map(cores));








