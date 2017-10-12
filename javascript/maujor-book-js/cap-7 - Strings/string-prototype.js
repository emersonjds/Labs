//A propriedade prototype permite criar novos atributos ou metodos aum objeto ja existente, trata-se de uma propriedade comum a todos os objetos.

var texto = new String('Casa')

texto.prototype.cor = 'azul'

console.log(texto.azul);