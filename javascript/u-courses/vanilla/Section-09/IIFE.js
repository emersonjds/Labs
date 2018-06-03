function sum() {
    return 1 + 2;
}

console.log(sum()); // return 3

var sum2 = function () {
    return 3 + 2;
}
console.log(sum2()); // return 5 

var sum3 = function otherSum() {
    return 5 + 2;
}

console.log(sum3()); // return 7
console.log(otherSum()); // otherSum is not defined , because it´s atribuited to sum3 , your scope is intern 

sum();
sum2();
sum3();

var obj = {
    prop: function () {
        return 1 + 2;
    }
}
console.log(obj.prop()); // return 3

(function () {
    return 1 + 2;
})();

(function () {
    return 4 + 5;
}())