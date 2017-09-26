//Retorna o indice de um elemento de um array, caso a funcao nao encontre o indice ela retorna -1 
// A busca ocorre de acordo com o tipo de dado passado na busca, strings, numbers, etc

var arr = [2, 3, 4, 5, 6, "a", "b"]

arr.indexOf("b") // retorna 6
arr.indexOf(4) // retorna 2
arr.indexOf("a") // retorna 5

//O segundo parametro é facultativo e quando definido estabelece o indice do elemento do array a partir do qual (inclusive) devera iniciar-se a busca

var array1 = [4,5,6,7,8, "d", "e", "g", 1]
array1.indexOf(1, 3)


