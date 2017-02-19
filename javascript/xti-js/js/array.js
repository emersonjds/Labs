/*
Array - Coleção de dados indexados por chave e valor
 */

var paises2 = ["Brasil", "Romenia", "Afeganistao", "Estados Unidos"]; //um array de forma literal é automaticamente convertido em objeto Javascript
var paises = new Array("Brasil", "Argentina", "Chile"); //convencional

document.writeln(paises + "</br>");

for (var a = 0; a < paises.length; a++) {
	document.writeln(paises[a] + "</br>");
}

//Busca
document.writeln(paises.indexOf("Argentina") + "</br>" ); //encontrar o indice do elemento
document.writeln(paises.lastIndexOf("Chile") + "</br>" ); //indica a ultima referencia

//Ordenação
document.writeln(paises2.reverse() + "</br>"); //inverte o array
document.writeln(paises2.sort() + "</br>"); //inverte o array

//Inserção de valores especiais no array
document.writeln(paises2.join(" ; ") + "</br>"); //Troca o caracter especial pelo que for colocado como parametro

//Concatenação de array
document.writeln(paises.concat(paises2).join(" ") + "</br>"); //inverte o array

var frutas = ["banana", "maça", "morango", "tomate", "jabuticaba", "laranja"];

document.writeln(frutas.splice(2, 2, "abacate", "granola", "umbu", "cupaçu")); // utilizando tanto para remover ou incluir naquela posição

document.writeln(frutas.join("  ") + "</br>");

//FIFO -> First In, First Out
var pessoas = ["Emerson", "Maria",  "Joao", "Claudio", "Nathalia"];

document.writeln(pessoas.join("  ") + "</br>");

pessoas.push("Thamyres"); //inser icone no array

document.writeln(pessoas.join("  ") + "</br>");

pessoas.shift(); //remove o primeiro elemento da fila

document.writeln(pessoas.join("  ") + "</br>");

pessoas.pop(); //remove o ultimo elemento da fila

document.writeln(pessoas.join("  ") + "</br>");

pessoas.unshift("Maria Clara"); //adiciona elemento no inicio da fila

document.writeln(pessoas.join("  ") + "</br>");