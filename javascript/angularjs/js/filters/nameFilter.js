angular.module("listaTelefonica").filter("name" , function() {
    return function(input) {
        var listaDeNomes = input.split(" ");
        console.log(listaDeNomes);
        return input;
    }
});