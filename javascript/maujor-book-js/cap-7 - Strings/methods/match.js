// match(expreg)

// O metodo match() retorna as ocorrencias da string definida no parametro expreg. Esse parametro é uma expressao regular supostamente contida na string em que se faz a procura. O retorno desse método é um array contendo as ocorrencias encontradas.

var x = 'DjkAarstbEc43Afgbhm';

var sResultado = x.match(/[A-E]/gi)
console.log(sResultado)
console.log(sResultado[0])
console.log(sResultado[5])