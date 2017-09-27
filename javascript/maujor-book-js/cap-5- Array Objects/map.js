//Percorre todos os elementos do array e modifica eles de acordo com a função de callback que foi passada como argumento. Nao altera o array original e admite um argumento obrigatório, que é uma função callback, e um argumento opcional. A função é executada para cada elemento do array e retornado em um novo array

var arr = [21, 3, 18, 290]
function funcaoUm(elem, ind, obj) {
    return (elem = elem * 10)
}

var x = arr.map(funcaoUm)
console.log(x)

//ou 
arr.map(dado => {
    dado * 10;
    console.log(dado)
})