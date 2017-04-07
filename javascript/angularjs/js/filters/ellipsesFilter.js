angular.module("listaTelefonica").filter("ellipsis", function() {
    return function(input, size) {
        if( input.lenght <= size )
            return input

        var output = input.substring(0, (size || 2)) + " . . . " 
        return output
    }
});