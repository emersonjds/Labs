//A propriedade length do objeto funcao destina-se a inspecionar o numero de argumentos esperados pela função. Difere da propriedade arguments.length por que esta retorna o numero de argumentos passados para a função e ela. o numero de argumentos esperados pela função . Alem disso, só existe no corpo da função e aquela pode ser acessada fora da funcão.

function soma(x,y) {
    console.log(arguments.length)

    return x + y
}

window.onload = () => {
    console.log(soma.length)
}