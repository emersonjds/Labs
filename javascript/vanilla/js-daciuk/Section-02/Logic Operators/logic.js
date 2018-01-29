var x = 3;
var y = 7;

x === 3;
true

x === 3 && y === 7;
true

x === 3 || y === 3;
// true por que x ou y podem ter valores verdadeiros, no caso x
// A expressao ou so da falso caso as duas sentenças sejam falsas

x != '3';
// x é diferente de 3 string == falso por que esta sendo testado somente o valor e nao o tipo

x !== '3';
// true por que x é igual a 3 number e nao '3' string, o valor e o tipo estao sendo testados

== valor é igual 
=== valor e tipo sao iguais
// essa utilização do sinal de = duplicado , é dado o nome de formato estrito e garante maior autoridade para validar valores e passagem de instrucões que demandem logica, o valor e tipo sendo testado é denominado como boa pratica.