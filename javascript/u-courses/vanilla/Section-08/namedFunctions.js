var func = function() {} // anonimous function ; wrong

var func = function func() {} //rigth mode ; this facilities a debug of function 

var func = function() {
    return 'hi';
}

func(); // hi
func.name; // func

var func = function myFunction() {}

func.name; // return myFunction

// Literal Function
function myFunction2 () {
    return 'myFunction 2'
}

myFunction2.name // return myFunction2

var func = function namedFunction() {
    return 'hi'
}