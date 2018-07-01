// pass objects and function like parameters 

var car = {
    color = 'yellow'
}

function getColorCar(myCar) {
    return myCar.color;
}

getColorCar(car); // return yellow 


// -------------------------------------------------------

function showOtherFunction(func) {
    return func();
}

showOtherFunction(function () {
    return 'Function JS Ninja';
});


function callName() {
    return 'Emerson Silva'
}

showOtherFunction(callName) // return 'Emerson Silva'

function returnedFunction(func) {
    return func()
}
//undefined
function showName() {
    return 'Emerson Silva'
}
//undefined
returnedFunction(showName)
//'Emerson Silva'