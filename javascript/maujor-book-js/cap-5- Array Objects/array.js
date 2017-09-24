//Array Indexado

var meuArray = ['laranja', 'casa', 4, {nome: "Jose", idade: 27}, 'carro']

// leitura de objeto num array
meuArray[3].nome;
// ou 
meuArray[3]["nome"]

var novoArray = new Array;
novoArray[0] = "Jose"
novoArray[1] = "Mercedes Benz"
novoArray[3] = 30
novoArray[4] = { cidade : "Sao Paulo", capital : "Sao Paulo"}
novoArray[5] = 333

console.log(novoArray)

// Array Associativo
var arrayAssociativo = {nome: "Mauricio", cidade: "Sao Paulo", idade: 65}

console.log(arrayAssociativo.nome)
console.log(arrayAssociativo["nome"])

