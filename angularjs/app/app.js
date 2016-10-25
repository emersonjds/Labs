(function() {
	angular.module('myApp', ['ngRoute']).config(["$routeProvider", function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "app/partials/home.html"
		}).when("/produto", {
			templateUrl : "app/partials/produto.html",
			controller: "ProdutoController"
		}).when("/estoque", {
			templateUrl: "app/partials/estoque.html"
		}).when("/produto/adicionar", {
			templateUrl: "app/partials/produto-add.html"
		});
	}]);
})();