//Retorna o indice de um elemento de um array, caso a funcao nao encontre o indice ela retorna -1 
// A busca ocorre de acordo com o tipo de dado passado na busca, strings, numbers, etc

var arr = [2, 3, 4, 5, 6, "a", "b"]

arr.indexOf("b") // retorna 6
arr.indexOf(4) // retorna 2
arr.indexOf("a") // retorna 5

//O segundo parametro é facultativo e quando definido estabelece o indice do elemento do array a partir do qual (inclusive) devera iniciar-se a busca

//começando a busca o numero 1 a partir da 3 casa 
var array1 = [4,5,6,7,8, "d", "e", "g", 1]
array1.indexOf(1, 3)

//Aceita ainda um terceiro argumento que e booleano sendo true ou falso
//Quando true faz a busca sem diferenciar o tipo de dado.
var array2 = [1, 2, "a", "b", 2, "c", 1, "a", "45"]
array2.indexOf(45) // retorna -1 nao existe o numero 45 no array
array2.indexOf(45, 0, true) // retorna 8 pois ignora o tipo de dado passado buscando na lista toda

