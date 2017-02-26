/*
	O conceito de clojure diz que a ideia que se passa é de ter uma função dentro de outra
	*/ 

	window.onload = function() {
		var botao = document.getElementsByTagName("button");

		function funcaoAuxiliar(j) {
			return function() {
				console.log("Voce clicou no botao " + j)
			}
		}

		for(var i = 0; i < botao.length; i++){
			botao[i].onclick = funcaoAuxiliar(i);
			console.log("Voce clicou no botao" + i);			
		}
	}


	function funcaoExterna () {
		console.log("funcao externa");
		function funcaoInterna() {
			console.log("funcao interna");
		}
		funcaoInterna();
	}

	function refClojure() {
		console.log("referencia externa");
		function refInternClojure() {
			console.log("referencia interna");
		}

		return refInternClojure;
	}

	var referenciaFuncao = refClojure();




