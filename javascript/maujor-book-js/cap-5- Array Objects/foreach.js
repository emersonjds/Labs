//FOREACH
// Percorre cada elemento do array retornando um callback
var arr = [3, 4, 5, "a", "b"]
arr.forEach((dado) => {
    if (dado % 2 == 0) {
        console.log(dado + 10)
    }
     return dado; // retorna 14
})