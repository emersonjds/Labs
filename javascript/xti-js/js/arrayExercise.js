/*
Array Exercise
*/

//true = disponivel;
//false = indisponivel;

window.onload = function() {
	carregarPoltronas();
}

var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarPoltronas (){
	var imagens = document.getElementsByTagName("img");

	for(var i = 0; i < imagens.length; i++) {
		if (poltronas[i] == true) {
			imagens[i].src = "img/poltrona.png";	
		} else {
			imagens[i].src = "img/poltrona_ocupada.jpeg";	
		}
	}
}

function selecionarPoltrona() {

	var imagens = document.getElementsByTagName("img"); //retorna um array
	console.log(imagens);

	for (var i = 0; i < poltronas.length; i++) {
		if (poltronas[i] == true) {
			imagens[i].src = "img/poltrona_ocupada.jpeg";

			var confirmaPoltrona = confirm("Deseja realmente selecionar uma poltrona ?!");
			if (confirmaPoltrona) {
				break;
			} else {
				imagens[i].src = "img/poltrona.png";				
			}
		}
	}
}

function selecionarPoltronaCasal () {

	var imagens = document.getElementsByTagName("img"); //retorna um array

	for (var i = 0; i < poltronas.length; i++) {
		if (poltronas[i] == true && poltronas[i + 1]) {
			imagens[i].src = "img/poltrona_ocupada.jpeg";
			imagens[i + 1].src = "img/poltrona_ocupada.jpeg";

			var confirmaPoltrona = confirm("Selecionar poltrona para casal");
			if (confirmaPoltrona) {
				break;
			} else {
				imagens[i].src = "img/poltrona.png";		
				imagens[i + 1].src = "img/poltrona.png";				
			}
		}
	}
}