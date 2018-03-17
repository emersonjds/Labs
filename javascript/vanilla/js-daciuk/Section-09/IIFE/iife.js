// Função autoexecutavel  IIFE 
function sum() {
    return 1 + 2;
}

console.log(sum());

var sum2 = function () {
    return 3 + 2;
}

console.log(sum2());

var sum3 = function otherSum() {
    return 5 + 8;
}

console.log(sum3());

// IIFE 
(function () {
    console.log(1 + 2);
})();

(function () {
    console.log('new call');
})();

function justReturn () {
    (function() {
        console.log('return intern function with callback');
    })
}