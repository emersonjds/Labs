function myFunction() {
    var number1 = 1;
    var number2 = 2;
    return sum();
    var sum = function sum() {
        return number1 + number2;
    }
}
console.log(myFunction());
// this function returns undefined because the literal function are atribuited for a variable, in this case the hoisting of variables works of diferent form

function myFunction() {
    var number1 = 1;
    var number2 = 2;
    return sum();
    function sum() {
        number1 + number2;
    }
}
console.log(myFunction());
// In this case the functions work because the hoisting mechanism is works with a literal function , that stay available in all scope of function

function myFunction() {
    function sum() { // hoisting mechanism
        return n1 + n2; // closure mechanism
    }
    var n1 = 1;
    var n2 = 2;
    return sum();
}