function myFunction() {
    var number1 = 10;
    var number2 = 20;
    return sum();
    function sum() {
        return number1 + number2;
    }
} // Funciona com a utilização de hoisting que reordena os elementos do escopo enviando a função literal para o topo da cadeia

function myFunc() {
    var n1 = 10;
    var n2 = 20;
    return sum();
    var sum = function sum() {
        return n1 + n2;
    }
} // nao funciona pois a função criada nao é do tipo literal, retorna undefined 

console.log(myFunction());
console.log(myFunc());

// -------------------------------------------------------
// Forma correta de declara funções dentro de funções para evitar Hoisting
function xpto() {
    var n1 = 10; //variaveis sempre no começo
    var n2 = 20;

    function sumNumbers() { // função literal utilizando closure para acesso as variaveis do escopo externo local
        return v1 + v2;
    }

    return sum();
    // execucão da função
}