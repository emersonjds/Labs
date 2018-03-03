function myFunction() {
    return 1;
}

function myFunction() {
    return 'string';
}

function myFunction() {
    return true;
}

function myFunction() {
    return null;
}

function myFunction() {
    return [1, 2, 3]
}

myFunction()[1]
// return array index

function returnObject() {
    return {
        prop1: 1,
        prop2: 'Emerson',
        prop3: function (x, y) {
            return x + y;
        }
    }
}
returnObject().prop3(10, 12);

function returnOtherObj() {
    return {
        name: 'Paul',
        age: 28,
        address: 'Rose Street, 21'
    }
}

function anotherData() {
    return [1, 2, 3, returnObject().prop3(10, 30), returnOtherObj()];
}