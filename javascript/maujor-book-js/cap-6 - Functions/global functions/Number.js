//Converte o valor passado na função para number, nao sendo possivel a conversao o valor retornando é NaN

function numero(x) {
    eval(`isNumero = Number(x); console.log(isNumero)`)
}

numero('Emerson') // NaN
numero('10') // 10

//A conversao de data com esta função resulta em 01 de Janeiro de 1971 
