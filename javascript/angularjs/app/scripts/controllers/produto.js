(function(){
	var ProdutoController = function ($scope) {
		$scope.produtos = [
			{
				id : 1,
				nome : 'Celular',
				categoria : 'eletronico',
				preco : 1000
			},
			{
				id : 2,
				nome : 'Televisão',
				categoria : 'eletronico',
				preco : 1000
			},
			{
				id : 3,
				nome : 'Carro',
				categoria : 'Bem Duravel',
				preco : 12000
			},
			{
				id : 4,
				nome : 'Computador',
				categoria : 'eletronico',
				preco : 3000
			},
			{
				id : 5,
				nome : 'Livro',
				categoria : 'Material Escolar',
				preco : 60
			}
		];

		$scope.adicionaProduto = function(produto) {
			$scope.produtos.push(produto);
		}
	};

	ProdutoController.inject = ['$scope'];

	angular.module('myApp').controller('ProdutoController', ProdutoController);
})();