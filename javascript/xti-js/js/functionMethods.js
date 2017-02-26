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


function Montadora(marca, ano, modelo) {
	this.marca = marca;
	this.ano = ano;
	this.modelo = modelo;
}

function Carro(marca, ano, modelo, cor, vendido) {
	this.marca = marca;
	this.ano = ano;
	this.modelo = modelo;
	this.cor = cor;
	this.vendido = vendido;
	Montadora.call(this, marca, ano, modelo);
}

//os parametros sao passados na mesma sequencia, 
//parametros que nao estejam condidos em montadora sao anexados ao de carro 
//assim com uma chamada unica é possivel manipualr as 2 informações

carroZero = new Carro('Nissan', '2017', 'Tiida', 'vermelho', 'sim');

console.log(carroZero);



