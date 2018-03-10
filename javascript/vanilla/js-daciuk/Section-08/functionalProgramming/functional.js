// Objeto Literal obj / function 
var car = {
    branc: 'Chevrolet',
    model: 'Silverado'
}

// Função Literal
function fun() { }

// ---------------------------------------------------------
// atribuição obj / function
var obj = {};
var func = function func() { };

// ------------------------------------------------------------

// Retorno de objetos em Função, acesos a propriedades assim como em um objeto 
function person() {
    return {
        name: 'Emerson',
        idade: 28
    }
}

function infoPerson() {
    var info = {
        name: 'Larissa',
        idade: 27
    }
    return info;
}

person().name;
infoPerson().idade;

