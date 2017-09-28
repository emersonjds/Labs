//O método reduce() utiliza uma função sobre um acumulador (seria quase um sinônimo para array com elementos numéricos) e cada elemento do array (da esquerda para direita) ou de baixo pra cima, reduzindo-a a um único valor.
//sintaxe
//array.reduce(callback[, valorInicial])

//parametros
// Parâmetros
// callback
// Função que é executada em cada valor no array, recebe quatro argumentos:

// valorAnterior
// O valor retornado na última invocação do callback, ou o argumento initialValue, se fornecido. (exemplo abaixo).
// valorAtual
// O elemento atual que está sendo processado no array.
// indice
// O índice do elemento atual que está sendo processado no array.
// array
// O array ao qual a função reduce foi executada.
// valorInicial
// Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback.

//O reduce  executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos) , recebendo quatro argumentos: o valor inicial (ou o valor do callback anterior), o valor do elemento corrente, o índice corrente e o array onde a iteração está ocorrendo.

// A primeira vez que o callback é chamado, o valorAnterior e o valorAtual podem ter um de dois valores possíveis. Se o  initialValue tiver sido fornecido na chamada à função reduce, então o valorAnterior será igual a valorInicial e valorAtual será igual ao primeiro valor no array. Se o valorInicial não tiver sido passado como argumento, então valorAnterior será igual ao primeiro valor no array e valorAtual será igual ao segundo.

// Se o array estiver vazio e valorInicial não tiver sido informado, uma exceção do tipo TypeError será lançada. Se o array possuir somente um elemento (independente da posição) e valorInicial não tiver sido fornecido, ou se valorInicial for fornecido, mas o array estiver vazio, o valor será retornado sem que a função de callback seja chamada.

[0, 1, 2, 3, 4].reduce(function(valorAnterior, valorAtual, indice, array) {
    return valorAnterior + valorAtual;
  });
// 10
//O valor retornado pelo reduce será o da última chamada à callback (10).

//Se voce informar um valor inicial para o segundo argumento de reduce , o resultado sera diferente

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  }, 10); //neste caso previousValue comeca valendo 10 
// 20

