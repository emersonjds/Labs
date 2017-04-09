angular.module("listaTelefonica").directive("uiDate", function() {
    return {
        require: "ngModel",
        link : function(scope, element, attrs, ctrl) {
            var _formatDate = function(date) {
                date = date.replace(/ [^0-9]+/g, " "); // limpando formato da data 
                if(date.length > 2 ) {
                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                if(date.length > 5) {
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }
                return date;
            }

            element.bind("keyup", function() {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue)); //chamada de função para setar valores na view passando o conteudo + ! 
                ctrl.$render(); // executa a renderização da pagina
            });

            ctrl.$parsers.push(function(value) {
                if(value.length == 10) {
                    var dateArray = value.split("/");
                    
                    return new Date(dateArray[2], dateArray[1] -1 , dateArray[0]);
                }
            });
        }
    };
});