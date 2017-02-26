/*
a chamada do metodo prototype permite que novas propriedades e outros metodos sejam
adicionados a um objeto ja existente
 */

window.onload = function() {
	console.log(Cilindro.cor);
}

function Cilindro(r, h) {
	this.raiobase = r;
	this.altura = h;
}

Cilindro.prototype.cor = "null";
Cilindro.cor = "vermelho";



