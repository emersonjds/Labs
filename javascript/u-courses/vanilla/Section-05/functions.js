(() => {
    return `IIFE`;
})();

function returnFunction(number) {
    return function sum(x, y) {
        return x + y * number;
    }
}
returnFunction()(10,20)

function multiply(x,y) {
    return x * y;
}

function calc(multiply(10,28));