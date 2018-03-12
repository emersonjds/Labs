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
} // nao funciona pois a função criada nao é do tipo literal

console.log(myFunction());