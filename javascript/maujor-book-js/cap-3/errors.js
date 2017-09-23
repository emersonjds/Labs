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

var z = prompt("Entre com um numero maior do que 0 e menor do que 10")

var x = 0;
try {
    if (x < 0)
        throw ("erro 1") //referencia para o erro capturado
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
        console.log("Entre comente com numero maior que e menor que 11")
}

// Chamada com throw new Error
try {
    if (x < 0)
        throw new Error("o numero deve ser maior do que 0")
    // quando instanciando um novo erros a propriedade message do objeto string muda seu valor
    if (x > 11)
        throw new Error("O numero deve ser menor do que 11")
    if (isNaN(parseInt(x)))
        throw new Error("Digite somente numero maior do que 0 e menor do que 11")
} catch (error) {
    console.log(error.message, error.name)
}

//Outra forma de utilizar o throw
try {
    if (x < 0)
        throw "O numero digitado nao é valido"
    if (x > 11)
        throw "O numero deve ser menor do que 11"
    if (isNaN(parseInt(x)))
        throw "Digite apenas numeros acima de 0 e menor do que 11 "
} catch (error) {
    console.log(error.message)
}