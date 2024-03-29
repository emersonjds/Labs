// return Function with another functions

function adder(x) {
    return function (y) {
        return x + y;
    }
}

var add2 = adder(2);
console.log(add2(3)) // return 5
adder(2)(3) // return 5

function adder(x) {
    function anotherFunction(y) {
        return x + y
    }
    return anotherFunction;
}

function hello(param) {
    return function (anotherParam) {
        return `${param} ${anotherParam}`
    }
}

hello('Ola')('Mundo')
//'Ola Mundo'
var firstParam = hello('Ola')
firstParam('Mundo')
    //'Ola Mundo