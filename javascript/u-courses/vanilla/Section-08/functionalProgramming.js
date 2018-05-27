// functions in js are treated like objects , in this case , all that an object can to do , functions can too

// literal object 
var car = {
    brand: 'Chevrolet',
    model: 'Silverado'
}

// literal function 
function sum(x, y) {
    return x + y;
}

// attribuated objects to variables and functions to variables 

var obj = {};
var func = function () { };
var func = function func() { };

// return objects and functions of another functions

function person() {
    return {
        name: 'Emerson',
        lastName: 'Silva'
    };
}

function inforPerson() {
    var info = {
        name: 'Emerson',
        lastName: 'Silva'
    };
    return info;
}

inforPerson().name; // return 'Emerson'
inforPerson().lastName(); // return 'Silva'

