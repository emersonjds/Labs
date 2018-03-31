window.onload = function () {
    var sign = prompt(`What's your astrological sign ?!`);

    switch (sign) {
        case 'libre':
            console.log('O signo digitado foi libra');
            break;
        default:
            'Nao foi encontrado o signo digitado';
    }
}