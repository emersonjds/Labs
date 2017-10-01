//Percorre todos os elementos do array retornando um callback, funciona semelhante ao reduce com a diferenca ele percorre o array do ultimo para o primeiro elemento.
//Este metodo nao altera o array inicial 

reduceRight(fn(v1, v2, ind, array)[,vInicial]);

v1 => valor anterior
v2 => valor atual
ind => indice
array => objeto array sendo percorrido

//pode ou nao ter m argumento opcional aonde v1 se torna este valor
//Ex 1 :
var arr = [1, 4, 5, 7,]

funcaoUm = function (v1, v2, ind, arr) {
    return v1 + v2
}
var x = arr.reduceRight(funcaoUm)
console.log(x)

// Ex 2:
var array1 = [1, 4, 7, 8]
funcaoDois = function (v1, v2, ind, arr) {
    return v1 + v2
}

var y = array1.reduceRight(funcaoDois, 100)
console.log(y)

//Implementação para suporte nos navegadores
if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function (fun */, initial*/) {
        var len = this.length >>> 0;
        if (typeof fun != "function") throw new TypeError();
        if (len == 0 & arguments.length == 1) throw new TypeError();
        var i = len - 1;
        if (arguments.length >= 2) {
            var rv = arguments[1]
        } else {
            do {
                if (i in this) {
                    rv = this[i--];
                    break;
                }
                if (i-- < 0) throw new TypeError()
            } while (true)
        }
        for (; i >= 0; i--) {
            if (i in this) rv = fun.call(null, rv, this[i], i, this)
        }
        return rv;
    }
}