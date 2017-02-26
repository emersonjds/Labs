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

alert(zonaSulDescricao.local + " " + zonaSulDescricao.quarto + " " + zonaSulDescricao.garagem + '\n' + 
	zonaSulVendas.local + " " + zonaSulVendas.quantidade + " " + zonaSulVendas.vendidos);





