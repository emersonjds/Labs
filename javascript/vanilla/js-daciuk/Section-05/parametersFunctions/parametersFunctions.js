var arr = [1,2,3]

function arrayarr(arg){
    return arg;
}

arrayarr(arr); // return [1,2,3]

function myFunction2(args) {
    return args[1];
}

myFunction2(arr);

myFunction2([1,2,3,4,5]); // return 2, pois é o valor contido no indice de chamada interna de retorno da função


var obj = {
    propriedade: 'Emerson',
    curso: 'Javascript Ninja',
    ninja: true
}

function myFunction(arg) {
    return arg;
}

myFunction(obj);
myFunction(obj).propriedade; //return 'Emerson'
myFunction(obj).ninja; //return true