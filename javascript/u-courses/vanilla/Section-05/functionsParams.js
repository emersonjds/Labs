// Example of the news params for functions 
// Functions they can receive arrays, objects, and primitive types as params

var arr = [1, 2, 3]

function myFunction(arg) {
    return arg;
}

myFunction(arr); // return 1, 2, 3]

function myFunction2(arg) {
    return arg[1]
}

myFunction2(arr) // return 2 

myFunction2([1, 2, 3, 4, 5]); // return 2

var obj = {
    prop: 'Emerson',
    curso: 'Javascript Ninja',
    ninja: true
}

function returnObj(args) {
    return args;
}

returnObj(obj).prop; // return Emerson

function myFunction3(arg) {
    return arg.curso
}

myFunction3(obj); // return case curso propertie exists 