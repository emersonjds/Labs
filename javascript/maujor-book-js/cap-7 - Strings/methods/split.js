// O metodo split() destina-se a criar um array de substrings extraidas de uma string. Os parametros 'separador' e 'limite' sao opcionais. O primeiro controla o caractere para separar as substrings do array e o segundo é um numero inteiro que especifica a quantidade de itens do array. Se o parametro separador for omitido, o array retornado contera uma substring somente, igual a string original.a

// Usando uma string vazia ("") como separador resulta em um array constituido elos caracteres da string original separados por uma virgula.
var s = "Javascript é uma linguagem com uma curva de aprendizado maior"

console.log(s.split());
console.log(s.split(""));
console.log(s.split(' '));
console.log(s.split('', 8));
console.log(s.split('', 2));