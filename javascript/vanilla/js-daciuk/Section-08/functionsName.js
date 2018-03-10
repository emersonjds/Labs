
//Função anonima , passada para uma variavel de referencia
var func = function () {
    return 'hi';
}

func(); // invocação de função
// return 'hi'
fun.name();
// return ''

//Função nomeada , passada para uma variavel de referencia
// desta forma é possivel que o debug acesse o nome da função para uma depuração melhor de código
var referenceVar = function namedFunction() {
    return 'xpto';
}
referenceVar.name() // return 'namedFunction';
referenceVar() // executa a função e returna 'xpto'

// Função Literal
// A função criada desta forma tambem tem a propriedade name que ajuda na depuração
function literalFunction() {
    return 'Literal Function';
}

literalFunction.name // return literalFunction;
literalFunction() // executa função e retorna 'Literal Function'