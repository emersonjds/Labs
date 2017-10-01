//Retorna um subarray do array inicial . Admite um ou dor argumentos que definem o indice inicial e o final do subarray a extrair

slice(arg1, [, arg2])

//Argumentos negativos revertem o inicio de contagem do indice para o ultimo elemento, ou seja , -1 e o ultimo elemento, -2,o penultimo e assim por diante

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

var a = arr.slice(2, 5) // Resulta em a = [3,4,5]
var a = arr.slice(3) // Resulta em a = [4,5,6,7,8]
var a = arr.slice(-5, 6) // Resulta em a = [3,4,5,6]
var a = arr.slice(-6, -4) // Resulta em a = [2,3]