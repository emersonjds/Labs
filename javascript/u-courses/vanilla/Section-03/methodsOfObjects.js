var myvar = function () {
    return `myvar`;
}
// First Class Function

var pessoa = {
    nome: 'Emerson',
    idade: 28,
    altura: 1.66,
    peso: 75
}

pessoa.andar = function () {
    return `Pessoa andando`;
}
pessoa.andar(); // return `Pessoa andando`
pessoa.sobrenome = 'Silva';
pessoa.nomeCompleto = function() {
    return `${pessoa.nomme} ${pessoa.sobrenome}`;
}

