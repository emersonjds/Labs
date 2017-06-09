var minhaVar = 'Teste';
function soma(x, y) {
    return x + y;
}
var numero = 10;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (i) { return i + 5; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
