angular.module('alurapic').controller('FotosController', function ($scope, $http) { //primeiro parametro nome do Controller e o segundo a funcao                                                                  que o define
    $scope.fotos = [];

    $http.get('v1/fotos')
        .success(function () {
            $scope.fotos = fotos;
        }).error(function(err){
            console.log(err);
    });

    // var promise = $http.get('v1/fotos');

    // promise.then(function(retorno) {
    //     $scope.fotos = retorno.data; 
    // }).catch(function(err){
    //     console.log(err);
    // })
});


//$scope -> atraves dele a controller consegue se comunicar com a view passando seu escopo interno
//$http -> rsponsavel pela execução de requests no angular
//promise -> promessa de que vai buscar os dados e caso haja sucesso retorna os dados com o metodo then
    //caso contrario chama um cath para informar o erro 

