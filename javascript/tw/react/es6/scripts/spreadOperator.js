// Temos um novo operador, “...”, chamamos de Spread (espalhar).
// Se colocarmos na frente de um Array, teremos cada um dos elementos fora do Array.

var myList = [3, 4, 5]
a = [1, 2, ...myList];

console.log(a)

// Em parâmetros de funções também:
var myList = [3, 4, 5];
function myFunction(a, b, c) {
  console.log(a, b, c)
}
myFunction(...myList) // 3, 4, 5

// outro tipo de passagem de dados
function myFunc(a, b, ...c) {
  console.log(a, b, c)
}
myFunc(1, 2, 3, 4, 5, 6) // return 1 2 (4) [3, 4, 5, 6]
// Aagora temos o parâmetro “c” da função com o operador “...”. Como estamos passando vários parâmetros para a função, todos os parâmetros restantes são concatenados em um array e passados para c.
