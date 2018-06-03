function myFunction() {
    var number1 = 1;
    var number2 = 2;
    function sum() {
        return number1 + number2;
    }
    return sum(); // sum it´s a closure beacuse access variables external to her
}

console.log(myFunction()); // return 3
console.log( sum() ); //return function is not defined because this scope is intern of function 

function myFunction() {
    function sum() {
        number1 + number2;
    }
    var number1 = 1;
    var number2 = 2;
    return sum(); // return 3
}

function myFunction() {
    var number1 = 1;
    var number2 = 2;
    return sum();

    function sum() {
        return number1 + number2;
    }
}