//A propriedade callee do objeto arguments fornece um mecanismo para chamar uma função anonima de dentro de si mesma  ou seja, permite que se faça referencia a uma função anonima sem ter de criar um nome para ela.
//Esse mecanismo é chamado de recursão 
// O exemplo classico é o calculo fatorial de uma função recursiva
var fatorial = (x) => {
    if (x == 0)
        return 1
    return console.log(x * fatorial(x - 1))
}

console.log(fatorial(10))

function fatorial(x) {
    if (x == 0) {
        return 1
    }
    return x * arguments.callee(x - 1)
}