angular.module("listaTelefonica").directive("uiData", function() {
    return {
        require : "ngModel",
        link : function(scope, element, attrs, ctrl) {
            element.bind("keyUp", function() {
                console.log(ctrl.$viewValue);
            });
        }
    };
});