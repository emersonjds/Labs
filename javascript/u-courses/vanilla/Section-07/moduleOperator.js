// Return a rest of division with 2 number

// 3 / 3 = 1
// 3 % 3 = 0
// 5 % 2 = 1

num = 0;
while (num <= 20) {
    num % 2 === 0 ? console.log(num) : '';
    num++;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

while (num <= arr.length) {
    arr.forEach(data => {
        data % 2 === 0 ? console.log(`numero par ${data}`) : '';
    })
    num++;
}