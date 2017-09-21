//FOR
// var msg = ""
// for (var i = 0; i < 10, i++) {
//     msg += i + ", ";
// }
// console.log(msg)

var n = "";

for (var i = 0; i < 10, i++) {
    n += i + ", ";
    if (n == 9) {
        break;
    }
}

console.log(n)

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        if (i == 20) {
            break;
        }
    }
    console.log(i + " ,")
}

