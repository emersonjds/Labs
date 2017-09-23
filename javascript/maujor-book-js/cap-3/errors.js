try {
    /// possivel exception
} catch (e) {
    console.log(e)
} finally () {
    // script qualquer
}

try {
    var x = u;
    var y = x + 2;
    console.log(y)
} catch (e) {
    console.log(e.message + "\n" + e.name + "\n" + e.toString())
    //atributos do objeto Error -> message, name 
}

//Trow treatment

var z = "Entre com um numero maior do que 0 e menor do que 10"

var x = 0;
try {
    if (x < 0)
        throw ("erro 1")
    if (x > 10)
        throw ("erro 2")
    if (isNaN(parseInt(x)))
        throw ("erro 3")
} catch (error) {
    if (error == "erro 1")
        console.log("O numero deve ser maior que 0")
    if (error == "erro 2")
        console.log("O numero deve ser menor que 11")
    if (error == "erro 3")
        console.log("Entre comente com numeto maior que e menor que 11")
}