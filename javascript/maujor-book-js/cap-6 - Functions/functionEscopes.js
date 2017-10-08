
// -------------------------------------------------- //
//Exemplo 1

function testeEscopo() {
    var soma = 2 + 6; // escopo local
    console.log(`A soma é ${soma}`);
}

testeEscopo();

try {
    console.log(`O dobro da soma é : ${2 * soma}`)
} catch (e) {
    console.log(e.message)
}

// --------------------------------------------------- //
//Exemplo 2 

function escopo() {
    soma = 2 + 6; // sem a declaração da palavra chave var escopo global
    console.log(`A soma é  ${soma}`)
}
escopo()
try {
    console.log(`O dobro da soma é ${2 * soma}`)
} catch (error) {
    console.log(error)
}

