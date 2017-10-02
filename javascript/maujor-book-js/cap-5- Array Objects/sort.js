//Esse metodo ordena os elementos de array. Admite uma funcao como argumento opcional
//Se o rargumento for omitido a ordenação sera em ordem alfabética crescente, havendo numeros serao transformados em strings para determinar a ordem resultando em ordenação nao numerica

var arr = ["maça", "laranja", "limao", "abacate", "banana"]
arr.sort() // Resulta em (5) ["abacate", "banana", "laranja", "limao", "maça"]

var arrUm = [2, 128, 34, 111]
arrUm.sort() //Resulta em (4) [111, 128, 2, 34]

arr.sort(function(a, b) {
    return a operador b
})

//Ordenação default
var arr = [2, 128, -32, 4734, 111, -67]

arr.sort(function(a,b) {
    return a-b;
}) // Resulta em (6) [-67, -32, 2, 111, 128, 4734]
//os elementos a e b sao comparados, se a - que b ele vem primeiro se iguals seguem sucessivamente se maior que b a ocupa o lugar de b e b o lugar de a sempre trazendo a ordenação numerica , esta funcao é necessaria para que os termos nao sejam convertidos lexicamente em strings
