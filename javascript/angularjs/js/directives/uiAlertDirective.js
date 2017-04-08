angular.module("listaTelefonica").directive("uiAlert", function() {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict : "E", // restringe ao elemento a diretiva que esta sendo criada
        scope : {
            title : "@", // titulo esta mapeado dentro do scopo da diretiva
        },
        transclude : true
    };
});