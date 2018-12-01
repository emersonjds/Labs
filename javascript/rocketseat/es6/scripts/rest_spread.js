// REST - Pegar o resto das propriedades
const usuario = {
  nome: 'Emerson',
  idade: 23,
  empresa: 'Kromm4'
};

const { nome, ...userData } = usuario;

console.log(nome); // Emerson 
console.log(userData); // Object { idade: 23, empresa: "Kromm4" }

// Tambem pode ser utilizado em arrays junto com desestruturação
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4]

// Utilização com função
function soma(...params) {
  return params.reduce((total, next) => total + next);
}

function returnRest(a, b, ...params) {
  return params;
}

soma(1, 2, 3, 4) // 10
returnRest(1, 3, 4, 5, 6) // [4, 5, 6]


// SPREAD OPERATOR - Propagar informações ou repassar para outra estrutura de dados

const valores = [1, 2, 3];
const valores1 = [4, 5, 6];
const valores2 = [...arr1, ...arr2]; // [1,2,3,4,5,6]

// ou com objetos
const usuario1 = {
  name: 'Maria',
  age: 18
}

const usuario2 = {
  ...usuario1,
  name: 'Emerson'
}
// Ele mantem todas as propriedades do objeto e so altera aquele que for notificado na operação


