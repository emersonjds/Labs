// Retorno de Funções , diretamente de outras funções
function adder(x) {
    return function (y) {
        return x + y;
    }
}

adder(10)(20); // return 30

function add(x) {
    return function calcSum(y) {
        return x + y;
    }
    return calcSum;
}

add(12)(13) // return 25