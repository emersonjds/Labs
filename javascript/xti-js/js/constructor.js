
window.onload = function() {
	console.log(cilindro.constructor)
}

function Cilindro(r,h) {
	this.raiobase = r;
	this.altura = h;

	return (r * h / 2);
}

var cilindro = new Cilindro(5, 10);