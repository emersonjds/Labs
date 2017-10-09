//Destina-se a converter em um numero a string passado como argumento da funcão, admite um argumento opcional que é a base a qual o numero devera ser retornado, omitindo esse argumento a conversao é feita na base 10
//Caso a string nao comece com um numero, o valor retornado é NaN , a funcao percore a string ate que seja encontrado um caractere que nao seja parte válida de um numero. Encontrado tal caractere a função retorna um numero.

function numero(x) {
    eval(`var s = parseFloat(x); console.log(x)`);
}