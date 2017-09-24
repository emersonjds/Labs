//FILTER
// Filtra os elementos de um array retornando um novo dado o filtro aplicado

// ** filter(fn(elemento, id, objeto) [,thisobjeto]) **

var array = [21, 3, 18, "a", 290, "b", 7]

function filtrarArray(elemento, id, objeto) {
    return (elemento >= 18)
}
array.filter(filtrarArray) //Retorna 21, 18, 290

array.filter(dado => {
    if (dado >= 18)
        return dado;
})

var array1 = [21, 3, 18, "a", 290, "b", 7]
function ftArray(elem, ind, obj) {
    return typeof (elem == "string")
}
array1.filter(ftArray)
console.log(array1)


var array2 = [21, 3, 18, "a", 290, "b", 7]

function filtrarArray(elem, ind, obj) {
    return (ind < 4)
}
array2.filter(filtrarArray)
console.log(filtrarArray)

