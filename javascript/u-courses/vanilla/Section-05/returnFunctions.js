//Examples with primitive types 

function myFunction() {
    return 1;
}
myFunction();

function myFunction() {
    return 'string';
}

function myFunction() {
    return true;
}

function myFunction() {
    return null;
}

function myFunction() { } // return undefined 

// return another types

function returnArray() {
    return [12, 3, 4];
}

returnArray()[0] // return 12

if (returnArray().length <= 2) {
    console.log('teste');
}

function myFunction() {
    return {
        prop1: 1,
        prop2: 1,
        prop3: function () {
            return 'prop 3';
        }
    }
}

let values = myFunction();
values.prop1; // return 1
values.prop3(); // execute the method