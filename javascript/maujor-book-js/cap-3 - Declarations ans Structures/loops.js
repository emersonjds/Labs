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

var x = "", j = 0;
while(j <= 10) {
    if(j % 2 == 0) {
        x = j + ", "
    }
    if(j == 10) {
        x = j + " "
    }
}

console.log(x)

//FOR IN 
carro = {
    marca :  "Renault",
    modelo: "Logan",
    comprimento: "4.250mm",
    largura: "1,735mm",
    altura: "1,525"
}

var msg = "";

for (c in carro) {
    msg+= c + ": " + carro[c] + "\n";
}

console.log(carro)