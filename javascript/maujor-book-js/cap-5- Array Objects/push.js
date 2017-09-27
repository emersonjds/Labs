//Acrescenta os argumentos no final de um array e retorna a nova quantidade de elementos do array
//O método push adiciona valores a um array.

//Esse método é intencionalmente genérico. Podendo ser utilizado por call() ou apply() em objetos que implementam arrays.  O método push depende da propriedade length para determinar onde começar a inserir os valores. Caso a propriedade length não possa ser convertida em número, é utilizado 0 como índice. Isto inclui a possibilidade de length não existir, nesse caso, essa propriedade será criada.

//push(arg1, arg2 ... arg10)

var array = [1, 2, 3, 4, 5]
var a = array.push("b", "c", "d", "e")
console.log(a) // retorna 9 

//MDN
var numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

numeros.push(5, 6, 7);

console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]

