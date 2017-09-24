// CONCAT
// Aplicado a um array ja existente acrescentando os elementos definidos como argumentos
var arr = [1, 2, "a", "b"]
var a1 = arr.concat("m", 32)


// EVERY
// Percorre cada elemento do array executando uma fn de cb, se nao encontrar um elemento que satisfaça a condição retorna false, senao true

// **every(fn(elem, ind, obj) ,[thisObjeto]) ** 

var array1 = [21, 13, 18, 290]
function funcaoUm(elemento, indice, objeto) {
    return typeof (elemento == "number")
}
var x = array1.every(funcaoUm)
console.log(x)
// return true pois todos os elementos do array sao do tipo "number" 

var array2 = [32, 3, 18, "a", "b"]
function funcaoDois(elemento, indice, objeto) {
    return typeof (elemento == "number")
}
var x1 = array2.every(funcaoDois)
console.log(x1)
// return false pois um dos dados do array nao retorna o callback da validação da funcao


//Para navegadores que nao suportam a chamada de Every

if (!Array.prototype.every)[
    Array.prototype.every = function (fun /*, thisp*/) {
        var len = this.length >>> 0;
        if (typeof fun != "function") throw new TypeError();

        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in this && !fun.call(thisp, this[i], i, this))
                return false;
        }
        return true;
    }
]