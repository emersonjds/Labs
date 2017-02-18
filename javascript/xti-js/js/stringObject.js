var x = new String("Texto comum dentro de texto");

var re = /[a-e]/;

document.writeln(x + "</br>");
document.writeln(x.fontcolor("red") + "</br>"); //enxergada com prototype
document.writeln(x.length + "</br>"); //tamanho do texto
document.writeln(x.charAt(3) + "</br>"); //retorna uma letra em determinada posição
document.writeln(x.charCodeAt(3) + "</br>"); //retorna o valor unicode
document.writeln(x.concat( " Javaiando scriptamente") + "</br>");

document.writeln(String.fromCharCode(116) + "</br>"); // por ser um metodo estatico é necessario chamar a classe

document.writeln(x.fontcolor("red") + "</br>"); // esta funcionalidade do document impede leitores de tela de funcionar
document.writeln(x.indexOf("texto") + "</br>"); //retorna a primeira referencia da palavra "texto"
document.writeln(x.lastIndexOf("texto") + "</br>"); //retorna a ultima referencia da palavra "texto"

document.writeln(x.match(re) + "</br>"); //utilizado para encontrar determinada ocorrencia com RegEx

document.writeln(x.replace("texto", "barangandantis") + "</br>"); //alterar valor do texto

//Funçoes para recorte de Strings

document.writeln(x.substring(8, 5) + "</br>"); //recorta a substring com base em 2 parametros que sao os indices

document.writeln(x.substr(5, 8) + "</br>"); //informa o parametro do indice inicial somando a quantidade do segundo parametro

document.writeln(x.slice(8, 5) + "</br>"); // se o primeiro parametro for menor que o segundo os valores nao serao alterados

document.writeln(x.split(" ,")[0] + "</br>"); // retorna um valor de acordo com caracter que voce quer identificar, indexando num array

var a = 0;
for (a in x) {
	document.writeln(a + " : " + x[a] + "</br>");
}

//Funcoes de marcacao no HTML 

document.writeln(x.toUpperCase() + "</br>"); 
document.writeln(x.big() + "</br>"); 
document.writeln(x.blink() + "</br>"); 
document.writeln(x.sup("2") + "</br>"); 
document.writeln(x.strike() + "</br>"); 
document.writeln(x.bold() + "</br>"); 
document.writeln(x.link("http://youtube.com") + "</br>"); 



