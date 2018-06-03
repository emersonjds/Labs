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


// Hositing in action
function myFunction() {
    function sum() { // hoisting mechanism
        return n1 + n2; // closure mechanism
    }
    var n1 = 1;
    var n2 = 2;
    return sum();
}

// Hoisting with variables
function myFunction() {
    var n1 = 1;
    var n2 = 2;
    var sum = undefined;
    return sum ();
    sum = function sum() {
        // ... logica function
    }
}

function myFunction() {
    var number1; // hoisting of variable, can see the variable but not catch your value
    console.log('Antes de criar', number1);
    var number1 = 10; // variable are declared and receive value
    console.log('depois de declarar', number1);
}

function myFunction() {
    console.log( sum() );
    function sum() {
        return 1 + 2;
    }
    console.log( sum() ); 
}

console.log( myFunction() ); // return 3 twice 