var arr = ['Emerson', 10, true, function () { }];

arr.length;
// return 4

var qtdArray = arr.length;

while (qtdArray > 0) {
    console.log(arr[qtdArray--])
}

var qtd = arr.length;

while (qtd > 0) {
    console.log(arr[qtd--]);
    if (qte === 3) {
        console.log(arr[qtd].bola);
    }
}