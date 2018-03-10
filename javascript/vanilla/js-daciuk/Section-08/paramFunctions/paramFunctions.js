//Passando objeto como parametro e manipulando dentro da função

var car = {
    color: 'yellow'
};

function getMyCar(myCar) {
    return myCar.color;
}

getMyCar(car); // return 'yellow'


// --------------------------------------------------------------
// Passando funcões como parametro de outra função

function showOtherFunction(func) {
    return func();
}

showOtherFunction(
    function () {
        return 'Functional Programming';
    }
);

function showSum(func) {
    return func();
}

function sum(x, y) {
    return x + y;
}

showSum(sum(10, 20));