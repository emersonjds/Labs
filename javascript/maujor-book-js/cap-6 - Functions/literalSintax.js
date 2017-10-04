//Funçoes expressoes
var calculaIMC = function (altura, massa) {
    //apenas para exemplificar
    return altura * massa
}

calculaIMC(10, 20)

var ola = () => {
    nomeVisitante = prompt('Digite seu nome')
    nomeVisitante = (nomeVisitante) ? nomeVisitante : 'visitante'

    return alert('Bem vindo ' + nomeVisitante)
}

var perimetroImutavel = () => {
    var area = 7 * 4;
    var perimetro = (7 + 4) * 2

    return alert(`A area é ${area} e o perimetro é ${perimetro}`)
}

var perimtroMutavel = (a, h) => {
    var area = a * h
    var perimetro = (a + h) * 2

    return alert(`A area é ${area} e o perimetro é ${perimetro}`)
}