//Arguments é uma variavel local de uma função e é assemelhado a um array contendo os argumentos passados na função.
//Nao dever ser tratado como um array puro , pois nao suporte os metodos e propriedades dos arrays, exceto 'length'
//A mecanismos capazes de transformar a variavel em um array puro

//Arguments so existe a partr do momento que a função é chamada até o término de sua ação e esta acessivel somente no corpo da função . O acesso do escopo externo a arguments resulta em erro.

function calcular(x, y, z) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])

    return (x * y) / z
}

var resultado = calcular(10, 20, 49)
console.log(resultado)