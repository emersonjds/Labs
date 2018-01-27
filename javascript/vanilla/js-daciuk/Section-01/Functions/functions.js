var x = 0;

function soma() {
    x++;
}

soma();
// x = 1 

// caso a função seja chamada sem os paranteses o javascript retorna so o tipo de dado e o nome da função
// [Function : soma]

//Toda variavel criada dentro de uma função tem como escopo a funçao, não é possivel acessar valores de variaveis dentro da função pelo escopo global

function name() {
    name = 'Emerson';
}
name
// retorna undefined pois o escopo de name, esta contido dentro da funçao

function vermelho() {
    var red = 'red';
    return red;
}
// vermelho();
// valor exibido = red

// Outras possibilidades
var y = 4;
function cinco() {
    return 5;
}
y + cinco();
// valor retornado 9 