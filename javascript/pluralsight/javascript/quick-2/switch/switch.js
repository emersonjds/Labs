window.onload = function () {
    var sign = prompt(`What's your astrological sign ?!`);

    switch (sign) {
        case 'capricornio':
            console.log(`O signo digitado foi ${sign}`);
            break;
        case 'libra':
            console.log(`O signo digitado foi ${sign}`);
            break;
        case 'escorpiao':
            console.log(`O signo digitado foi ${sign}`);
            break;
        default:
            'Nao foi encontrado o signo digitado';
    }
}

(function() {
    return `never give up`;
})();