// replace(string[expreg, nova_string] funcao)

// O metodo replace() encontra em uma string a primeira ocorrencia da string definida no parametro string ou expreg e substitui essa ocorrencia pela string definida no parametro 'nova_string' ou pelo valor retornado la funcao definida no parametro funcao

// Ambos os parametros do metodo sao obrigatorios. O primeiro paramtro é a substring a procurar dentro da string principal e pode ser tanto uma substring como uma expressao regular definindo a substring e o segundo parametro é a string que substituira as ocorrencias encontradas e sera definida em forma de uma string ou valor de uma funcao 

var s = 'DjkAabcrstbEc43Afgbhm';

var sResultado = s.replace('abc', 'emerson');

console.log(sResultado) // Output DjkAemersonrstbEc43Afgbhm


//Exemplo 2 - Com expressao regular 

var x = 'DjkAabcrstbEc43Afgbhm';

var sResultado = x.replace(/abc/g, 'emerson'); // com expressao regular

console.log(sResultado) // Output DjkAemersonrstbEc43Afgbhm