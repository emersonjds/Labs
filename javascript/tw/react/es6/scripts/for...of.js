// O “for..of” funciona de forma parecida com o “for..in”.
// Vamos comparar:
var list = ["a", "b", "c", "d"]
for(var index in list) {
  console.log(index)
}
// return -> 0, 1, 2, 3

for(var value of list) {
  console.log(value)
}
// return -> a, b, c, d

// O “for..in” irá imprimir todos os índices, enquanto o “for..of” irá imprimir os valores.