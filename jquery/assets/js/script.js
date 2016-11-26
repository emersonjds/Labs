var aposInicializado = function () {
	var totalItens = $('.preco:visible');
	var valorTotal = 0;
	console.log(totalItens);

	for(var i = 0; i < totalItens.length; i++ ) {
		var conteudo = $(totalItens[i]).text();
		var preco = parseFloat(conteudo);
		valorTotal += preco;
	}

	$('.valor-total').text(valorTotal);
	$('.quantidade-de-itens').text(totalItens.length);

	var umaPropaganda = function(){
		var propagandas = ["O que acha de comprar uma motocicleta?",
		"O que acha de comprar uma lancha?",
		"O que acha de comprar uma bicicleta?",
		"O que acha de comprar uma carro?"
		];

		var posicao = Math.floor(propagandas.length *Math.random());
		var texto = propagandas[posicao];
		var tr =$("<tr>").addClass("propaganda").append($("<td>"));
		tr.find("td").attr("colspan", 6).text(texto);
		return tr;
	}

	$(this).find("tr:nth-child(3n), tr:last").each(function() { //subindo pela arvore a partir do enesimo elemento
		umaPropaganda().insertAfter($(this));
	});
}

var removeItem = function(event) {
	event.preventDefault(); //setando valor padrao de comportamento

	var quantidadeComoString = $(".quantidade-de-itens").text();
	var atual = parseInt(quantidadeComoString);
	var novaQuantidade = atual - 1; 
	
	$(".quantidade-de-itens").text(novaQuantidade); 

	var self = $(this);
	self.closest('tr').hide(); //sobe a hirarquia na arvore de DOM até o elemento especificado

	var valorTotal = parseFloat($('.valor-total').text());
	var preco = parseFloat(self.closest('tr').find('.preco').text());
	var precoFinal = valorTotal - preco;
	$('.valor-total').text(precoFinal);
}

var undo = function() {
	var carrinho = $(this).closest('.carrinho');
	carrinho.find('tr:visible').removeClass('recuperado'); //setando por default a retirada da classe de mercação

	var trs = carrinho.find('tr:hidden'); //pegar todas as trs com propriedade de hide
	trs.show().addClass('recuperado');

};

var daDestaque = function() {
	$(this).find('.remove-item').fadeIn();
	$(this).addClass('hovering');
}

var tiraDestaque = function () {
	$(this).find('.remove-item').fadeOut();
	$(this).removeClass('hovering');
}

var alternaPropaganda = function (event) {
	event.preventDefault();
	$('.propaganda').fadeToggle();
	$('.alternaPropaganda').fadeToggle();
}


$(aposInicializado);
$('.undo').click(undo);
$('.remove-item').click(removeItem);
$('#escondePropaganda').click(escondePropaganda);

$('.alternaPropaganda').click(alternaPropaganda);
$('tr').hover(daDestaque, tiraDestaque);

// $('tbody tr').on("mouseenter", .hovering); //utilizando funçoes de evento
// $('tbody tr').on("mouseleave", .hovering);

