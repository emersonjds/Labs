//A propriedade length do objeto arguments retorna a quantidade de arguentos da função

function calcular(x,y,z) {
    console.log(arguments.length)
    return (x * y) / z 
}

var resultado2 = calcular(4,5,11)
console.log(resultado2)