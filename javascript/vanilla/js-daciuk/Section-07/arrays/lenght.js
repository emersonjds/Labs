var arr = ['Emerson', 10, true, function () { }];

arr.length;
// return 4

var qtdArray = arr.length;

while (qtdArray > 0) {
    console.log(arr[qtdArray--])
}