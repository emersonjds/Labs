/* 
Document Object Model
*/

//DOM HTML API / DOM CORE API e DOM XML API

window.onload = function() {
	adicionaLinha("Bonifácio", "Jose");

	var btn = document.getElementById("btn");
	var btnDelete = document.getElementById("delete");

	btn.onclick = function() {
		var link = document.links; // retorna uma colection de links
		for(var i = 0; i < link.length; i++) {
			adicionaLinha(link[i].alt, link[i].href);
		}
	}

	btnDelete.onclick = function() {
		var tb = document.getElementsByTagName("table").item(0);
		tb.deleteRow(1);	
	}

}

var tit = document.getElementById("tit");
// alert(tit);

var tit2 = document.getElementsByName("tit");
// alert(tit2[0]);

var tit3 = document.getElementsByClassName("tit");
// alert(tit3[0]);

var tit4 = document.getElementsByTagName("h2");
// alert(tit4);

var tit5 = document.querySelector("#tit");
// alert(tit5);

tit.innerHTML = "xablauzando tudo";

tit.style.color = "red"; //DOM HTML API

tit.setAttribute("style", "color : yellow"); //DOM CORE API

//Coleções de elementos
console.log(document.title);
console.log(document.images); // retorna um array com todas as imagens contidas no DOM

//console.log(img.namedItem("selecionada")); // faz uma busca corrente em cima do id
// que é passado como parametro para a chamada da função
// ainda é possivel manipular o objeto com as propriedades de uma tag html
// chamando os metodos com . e passando o atributo que quer alterar ou verificar
// exemplo
//console.log(img[0].src); // retorna o path da imagem

//coleção de links
console.log(document.links);

// alterar elementos

function adicionaLinha(texto1, texto2) {

	var tb = document.getElementsByTagName("table").item(0);
	var row = tb.insertRow(-1)// sempre insere uma ultima linha na tabela
	var cell = row.insertCell(0);
	var cell2 = row.insertCell(0);

	cell.appendChild(document.createTextNode(texto1));
	cell2.appendChild(document.createTextNode(texto2));
}

// working with collections
