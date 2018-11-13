// É muito comum termos a necessidade de processar vários itens em uma lista, mas há ocasiões em que precisamos acessar apenas um item de cada vez.

// Um Iterator (iterador) é um objeto que sabe como acessar cada um dos itens de uma coleção por vez. Esses objetos possuem o método “next()”, que retornam o valor seguinte. Automaticamente eles mantêm a posição em que parou, sabendo qual o valor seguinte a ser retornado.

// Ao executar o “next()” teremos duas propriedades: “done” e “value”.

// O “done” indica se a lista já acabou, e o “value” indica o valor da lista retornado.

// String, Array, TypedArray, Map e Set já possuem um Iterator embutido. Isso porque o Prototype deles possuem um Symbol que indica o Iterator.

// Você se lembra dos Symbols? No JavaScript nós possuímos alguns já embutidos. Para se acessar um Iterator, especificado como “@@iterator”, basta usar “Symbol.iterator”.
// Iterar sobre uma String:

var str = "TreinaWeb";
var myIterator = str[Symbol.iterator]();
myIterator.next();

// Criamos uma String com o texto “TreinaWeb”; Pegamos a String e acessamos o Iterator usando o Symbol “Symbol.iterator”. Salvamos o retorno na variável “myIterator”, um objeto chamado de “Iterable”. Assim teremos acesso à função “next()”.

// Cada vez que executamos “next()” recebemos um caractere da String. Ao finalizar, o campo “value” virá vazio e o campo “done” virá como “true”, indicando que a iteração finalizou.