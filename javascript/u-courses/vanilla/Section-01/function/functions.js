function nome() { }

var x = 1;

function soma() {
    x = x + 1;
}

x // return 1;
soma() // return undefined ja que nao ha retorno na funç
x // return 2; o valor foi acrescenteado pela função
soma();
x // return 3

// Function Scopes
function returnName() {
    var nome = 'Emerson';
}
nome
// return nome is not defined , isso ocorre por que funçoes criam seu escopo, entao tudo dentro de uma função so esta visivel dento dela , a variavel ou outra função dentro dela so existe dentro dela.

function returnName2() {
    var nome = 'Emerson';
    return nome; // desta forma o valor da variavel é retornado, ja a variavel continua inacessivel dora do escopo da função
}

returnName2(); // return 'Emerson'

var y = 4;

function cinco() {
    return 5;
}
y + cinco(); // return 9 

function soma(x, y) {
    return x + y;
}
soma(10, 20)// return 30 