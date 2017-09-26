//Esse metodo transforma os elementos do array em uma string. Admite um argumento opcional que e destina a criar um separador para os elementos do array.
//Se nao for especificado o argumento , o separado adotado por padrao é a virgula

var arr = [1, 2, "a", "b"]

var a = arr.join(); // Resulta na string a = "1,2, a, b"
var a = arr.join(" -"); // Resulta na string a = "1 - 2 - a - b"
var a = arr.join(" * "); // Resulta na string a = "1 * 2 * a * b"
