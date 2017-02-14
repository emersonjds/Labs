/*
Special Operators
*/

var idade = 20, nome ="Emerson" ;

var x = (idade >= 18) ? "Maior de idade" : "Menor de idade";

console.log(x);
console.log(nome);

Pessoa = {
	nome : "Emerson",
	idade : 27
}

delete(Pessoa.idade);
//O operardor delete é utilizado para deletar algum atributo de um objeto ou valor de um array

console.log(Pessoa);

console.log("nome" in Pessoa);
//utilizado para verificar se existe ou nao uma propriedade tanto em objetos quanto para varrer arrays

var idade = new Number(31);

console.log(idade instanceof Number);
//verifica se existe uma instancia de determinado objeto

console.log(this.document.title);
//referencia ao objeto atual ou ao contexto em que esta inserido

console.log(typeof(function(){}));


