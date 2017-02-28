

//DOM NIVEL 0
window.onload = function () {

	var botao = document.getElementById("botao");
	botao.addEventListener("click", funcao, false);
	//primeiro parametro evento, segundo funcao, e terceiro se quer tratar o evento com propagacao
	botao.addEventListener("click", funcao1, false);

	botao.onclick = function(evt) { //parametro para navegadores mais modernos 
		var oEvento = evt ? evt : window.event;
		alert("x =" + oEvento.screenX + " Y = " + oEvento.screenY);
	}

	botao.onclick = function() {
		console.log(this.id);
	}

	document.getElementById("texto").onblur = function(e) {
		console.log(this.value);
	}

	var divi = document.getElementById("primeira");

	divi.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log('primeira');
	}

	document.onclick = function() {
		console.log("document");
	}
}

//com a utilização do addEventListener é possivel adicionar 2 eventos a uma mesma ação

function funcao() {
	alert("Ola");
}

function funcao1() {
	alert("Ola 2");
}