function scharAt() {
	var texto = 'mau%\SR=+t$@ 098mu hjor \\\a';
	var indice = Number(document.form.indice.value);

	if (isFinite(indice) && indice >= 0 && indice <= texto.length -1) {
		document.form.resultado.value = texto.charAt(indice);
	} else {
		alert("Entre com um indice valido");
	}
} 