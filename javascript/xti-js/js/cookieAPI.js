/* 
Cookie API HTML5
*/

window.onload = function() {
	var gravar = document.getElementById("gravar");
	var exibir = document.getElementById("exibir");
	var texto = document.getElementById("texto");

	gravar.onclick = function() {
		localStorage.setItem("nome", text.value);
		text.value = " ";
	}

	exibir.onclick = function() {
		text.value = localStorage.getItem("nome");
	}
}