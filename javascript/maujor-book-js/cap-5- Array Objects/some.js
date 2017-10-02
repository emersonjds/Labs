//percorre cada elemento do array e executa um callback assim que a fn() satisfaça as condições impostas no corpo ele retorna true caso contrario retorna false. Este metodo tambem nao altera o array inicial e admite um argumento obrigatório, que é uma função callback , e um argumento opcional.

soma(fn(ele, ind, obj)[,thisObjeto])

//Exemplo 1
var arr = [21, 3, 18, "a", "b"]
funcaoUm = function (elem, ind, obj) {
    return (typeof elem == "string")
}

var x = arr.some(funcaoUm)
alert(x) // Retorna true, pois existe pelo menos um elemento string no array

//Exemplo 2 
var arr = [21, 3, 18, 290]
function funcaoDois(elem, ind, obj) {
    return (typeof elem == "string")
}

var x = arr.some(funcaoDois)
console.log(x) // Retorna false , nao existe um elemento do array que seja string neste caso

// Implementação para navegadores sem suporte
if (!Array.prototype.some) {
    Array.prototype.some = function (fun /*, thisp*/) {
        var i = 0, len = this.length >>> 0;
        if (typeof fun != "function") throw new TypeError();
        var thisp = arguments[1]
        for (; i < len; i++) {
            if (i in this && fun.call(thisp, this[i], this))
                return true;
        }
        return false;
    }
}