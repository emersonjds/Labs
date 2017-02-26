/*
	O conceito de clojure diz que a ideia que se passa é de ter uma função dentro de outra
 */ 



function funcaoExterna () {
	alert("funcao externa");
	function funcaoInterna() {
		alert("funcao interna");
	}
	funcaoInterna();
}

function refClojure() {
	alert("referencia externa");
	function refInternClojure() {
		alert("referencia interna");
	}

	return refInternClojure;
}

var referenciaFuncao = refClojure();


