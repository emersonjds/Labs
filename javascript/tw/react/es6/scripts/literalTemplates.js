// Essa funcionalidade é simplesmente uma nova maneira de declararmos Strings. A diferença é que podemos passar expressões e variáveis no meio da string, o que é muito útil para nos poupar de ficar concatenando strings.
// Para isso, usamos o acento grave (também conhecido como crase).
var myVar = 5;
console.log(`My var value is ${myVar}`);
// O “${}” indica que queremos um escape da string. Lá dentro podemos executar funções, passar expressões ou variáveis. Chamamos isso de “interpolação”.
// Com esse novo tipo de String, também podemos pular linhas.
var myString = `a
b
c
`;
console.log(myString);
