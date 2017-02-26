/* 
Function Methods
*/

function apartamentoDescricao(local, quarto, garagem) {
	this.local = local;
	this.quarto = quarto;
	this.garagem = garagem;
}

function apartamentoVenda(local, quantidade, vendidos) {
	this.local = local;
	this.quantidade = quantidade;
	this.vendidos = vendidos;
}

zonaSulDescricao = new apartamentoDescricao("Zona Sul", 4, 'sim');
zonaSulVendas = new apartamentoVenda("Zona Sul", 12, 7);

// alert(zonaSulDescricao.local + " " + zonaSulDescricao.quarto + " " + zonaSulDescricao.garagem + '\n' + 
// 	zonaSulVendas.local + " " + zonaSulVendas.quantidade + " " + zonaSulVendas.vendidos);


function montadora(fabricacao, marca, ano, cor) {
	this.fabricacao = fabricacao;
	this.marca = marca;
	this.ano = ano;
	this.cor = cor;
}

function Carro(marca, ano, modelo) {
	this.marca = marca;
	this.ano = ano;
	this.modelo = modelo;
	montadora.call(this, fabricacao, marca, ano, cor);
}

carroZero = new Carro('Nissan', '1989', 'Tiida', 'Bahia', 'vermelho');

console.log(carroZero);



