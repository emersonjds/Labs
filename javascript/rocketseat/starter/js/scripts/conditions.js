function returnSex(sex) {
    if (sex === 'M') {
        return 'masculino'
    } else {
        return 'feminino'
    }
}

function returnSexWithSwitch(sex) {
    switch (sex) {
        case 'F':
            return console.log('Feminino')
        case 'M':
            return console.log('Masculino')
        default:
            return console.log('Valor nao informado')
    }
}

console.log(returnSex('F'))
returnSexWithSwitch('M')
returnSexWithSwitch()