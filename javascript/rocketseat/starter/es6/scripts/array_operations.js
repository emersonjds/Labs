const arr = [1, 3, 4, 5, 8, 9];

//Map

const newArr = arr.map(function(item, index){
  return item * index;
});

console.log(newArr); // [2,6,8,10,16,18]
console.log(newArr); // [valor * posição no array];

// Reduce

const sum = arr.reduce(function(total, next) {
  return total + next;
}); // return 30 = 9 + 8 + 5 ... 

// Interações do reduce
// 1 interação
// total = 0
// next = 1 
// total + next = 1;

// 2 interação
// total = 1,
// next = 3
// total + next = 4

const numbers = [1,2,3,4,5];
const autoMultiply = numbers.reduce((proximo, atual) => { return proximo * atual});
// return 120

// E assim sucessivamente , até ele retornar a soma de todos os valores presentes no array

// Filter
const filter = arr.filter(function(item) {
  return item % 2 === 0;
}) // return [4,8] // filter sempre retorna true ou false

// Find - Verificar alguma informação dentro do array
const find = arr.find(function(item){
  return item === 4;
}); //return 4
// Caso o find nao encontre o valor ele retorna undefined

