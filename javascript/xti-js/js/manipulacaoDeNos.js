/* 
DOM CORE API
*/

// COMPOSTO POR NÓ DOCUMENTO 
// NOS DE ELEMENTO
// NOS DE ATRIBUTO
// NOS DO TIPO TEXTO

/* Parenttesco dos nós
PAI = parent, FILHO = Child, Irmao = Sibling
*/

window.onload = function() {

	var div = document.getElementsByTagName("div").item(0);


	var hr = document.createElement("hr"); 
	div.appendChild(hr);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode("Teste de Lista"));
	div.appendChild(li);

	var atributo = document.createAttribute("style");
	atributo.value = "color : blue";
	li.setAttributeNode(atributo);

	var select = document.createElement("select");
	select.setAttribute("id", "estados");

	var option = document.createElement("option");
	option.setAttribute("value", "DF");
	option.appendChild(document.createTextNode("Distrito Federal"));

	select.appendChild(option);
	div.appendChild(select);

	var del = div.firstChild;

	div.removeChild(del);

	var select2 = select.cloneNode(true);

	div.appendChild(select2);

	var option3 = option.cloneNode(true);

	select.appendChild(option3);
}





// alert(div);
// alert(div.parentNode);
// pai do elemento criado

// alert(div.childNodes);


// var ul = div.childNodes.item(0);
// alert(ul.nodeName);
// alert(ul.nodeType); // tipo de nodo, texto, document, element

// alert(ul.firstChild); // recuperar primeiro elemento da lista

// var li = ul.firstChild.lastChild.childNodes[1];
// alert(li.firstChild.nodeValue);

// alert(li.previousSibling.firstChild.nodeValue);
// alert(li.nextSibling.firstChild.nodeValue);
