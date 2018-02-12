// o operador de switch verifica a validação com operador de strict equals ou seja === validando o valor e o tipo

function myFunc(x) {
    switch (x) {
        case 1:
            console.log('x é igual a ' + x);
            break;
        case 2:
            console.log('x é igual a ' + x);
            break;
        default:
            console.log('x nao é igual a 1 nem a 2');
    }
}