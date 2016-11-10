var aposInicializado = function () {
	var totalItens = $('.preco');
	var valorTotal = 0;
	console.log(totalItens);

	for(var i = 0; i < totalItens.length; i++ ) {
		var conteudo = $(totalItens[i]).text();
		var preco = parseFloat(conteudo);
		valorTotal += preco;
	}

	$('#valor-total').text(valorTotal);
	$('#quantidade-de-itens').text(totalItens.length);
}

var removeItem = function(event) {

	event.preventDefault(); //setando valor padrao de comportamento

	var quantidadeComoString = $("#quantidade-de-itens").text();
	var atual = parseInt(quantidadeComoString);
	var novaQuantidade = atual - 1; 
	
	$("#quantidade-de-itens").text(novaQuantidade); 

	var self = $(this);
	self.closest('tr').hide(); //sobe a hirarquia na arvore de DOM até o elemento especificado

	var valorTotal = parseFloat($('#valor-total').text());
	var preco = parseFloat(self.closest('tr').find('.preco').text());
	var precoFinal = valorTotal - preco;
	$('#valor-total').text(precoFinal);
}

var undo = function() {
	$('tr:visible').removeClass('recuperado'); //setando por default a retirada da classe de mercação

	var trs = $('tr:hidden'); //pegar todas as trs com propriedade de hide
	trs.show().addClass('recuperado')
};

$(aposInicializado);
$('#undo').click(undo);
$('.remover').click(removeItem);
