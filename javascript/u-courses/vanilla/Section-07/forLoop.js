// Loop for pattern 
// for(init, condition, final-expression)

var num = 0;

while (num < 20) {
    console.log(num++);
}

for (var num = 0; num < 20; num++) {
    console.log(num);
}

for (var num = 2, arroz = 3; num < 5; num++) {
    console.log(num);
    console.log(arroz + num);
}