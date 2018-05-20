function myFunc(x) {
    switch (x) {
        case 1:
            console.log(`x é igual a 1`);
            break;
        case 2:
            console.log(`x é igual a 2`);
            break;
        default:
            console.log(`x não é nem 1 nem 2`);
    }
}

function myFunction() {
    return [1, 2, 3, 4, 5,]
}

let getPairNumber = myFunction().map(x => {
    return x % 2 === 0 ? `${x} é par` : `nao foram encontrados numeros pares`
});