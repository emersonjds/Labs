var pessoa = {
    nome: 'Emerson',
    idade: 28,
    peso: 1.66,
    sexo: 'masculino'
}

pessoa.cor = 'caucasiano'; // criação de uma nova propriedade

pessoa.andar = function () {
    return 'pessoa andando';
}

pessoa.aniversario = function () {
    return pessoa.idade++;
}

