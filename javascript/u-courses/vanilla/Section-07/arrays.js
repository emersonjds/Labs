var arr = ['Emerson', null, true, { bola: azul }, function () { }]
// length property count the amount items of array

arr.length; // return 5 

var qtde = arr.length;

while (qtde > 0) {
    console.log(arr[qtde--]);
}

qtde = arr.length;

while (qtde >= 0) {
    console.log(arr[--qtde]);
}

while (qtde > 0) {
    console.log(arr[--qtde]);
    if (qtde === 3) {
        console.log(arr[qtde].bola);
    }
}