// Arrow Functions, também conhecida como Lambda em outras linguagens, tem a mesma funcionalidade das funções anônimas, porém, com algumas pequenas diferenças.
var sum = (a, b) => {
  return a + b;
}
// A diferença com a declaração de uma função anônima é que não precisamos mais da palavra “function”, e entre os parâmetros e as chaves, devemos colocar “=>”, o que dá o nome de “arrow functions”, por causa da seta.
// Podemos facilitar mais ainda:
// se tivermos apenas um parâmetro, não precisamos dos parênteses;
// se nossa função tem apenas uma linha, não precisamos das chaves nem de “return”.
// Com isso, podemos declarar a seguinte função que retorna o dobro do valor passado:
var double = n => n * 2;
console.log(double(10))
// Isso pode parecer estranho quando se vê pela primeira vez, mas logo você se acostuma. Isso é muito útil para deixar o código mais limpo para quando precisarmos passar alguma função para configurar uma outra função, como por exemplo:
var myList = [1, 18, 10, 40, 33, 60];
myList.sort(function(a, b) {
  return a > b ? 1 : -1;
})
console.log(myList) // return (6) [1, 10, 18, 33, 40, 60]
//Refactor with Arrow Function 
var myList = myList.sort((a, b) => a > b ? 1: -1)
console.log(myList)
