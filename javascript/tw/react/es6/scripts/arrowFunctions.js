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
myList.sort(function (a, b) {
  return a > b ? 1 : -1;
})
console.log(myList) // return (6) [1, 10, 18, 33, 40, 60]
//Refactor with Arrow Function 
var myList = myList.sort((a, b) => a > b ? 1 : -1)
console.log(myList)

// Extract values of the list
var myList2 = [
  { a: 1 },
  { b: 2 },
  { c: 4 },
  { d: 10 }
]
var myNewList = myList2.map(x => x.a)

var myObj = {
  a: 5,
  myFunc: function() {
    console.log(this.a)
    var newFunc = function() {
      console.log(this.a)
    }
    newFunc()
  }
}
myObj.myFunc();
// O segundo “console.log()“, que está dentro da função “newFunc()” dará um erro, pois o “this” não estará apontando para o objeto “myObj”, pois um novo escopo será criado.
// Temos várias maneiras para evitar esse erro. Os dois mais usados são:
// guardar o this em uma variável e usá-ls dentro da função;
// usar a função “bind()” para indicar qual o “this” da função.
// Com as Arrow Functions, o escopo permanece, o que nos livra de todos esses problemas:
var myObj = {
  a: 5,
  myFunc: function(){
      console.log(this.a);
      var newFunc =() => {
          console.log(this.a);
      }
      newFunc();
  }
}
myObj.myFunc()
// Deve-se entender bem como funciona o escopo no JavaScript, pois haverá momentos em que Arrow Functions não servirão.