(() => {
    return `IIFE`;
})();

function sum(x, y) {
    return x + y;
}

(sum(10, 20))()

function divider(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y
}

var array = [1, 2, 3, 4, 5, 6];

function filter(arr) {
    return arr.filter(data => data === 1);
}

filter(array);