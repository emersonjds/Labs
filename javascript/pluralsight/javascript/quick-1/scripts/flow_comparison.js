randomNumber = Math.round(Math.random() * 15);

if (randomNumber % 3 === 0 && randomNumber !== 0) {
    alert('Fizz');
} else if (randomNumber % 5 === 0 && randomNumber !== 0) {
    alert('Buzz');
} else if (randomNumber % 3 === 0 && randomNumber % 5 === 0 && randomNumber !== 0) {
    alert('FizzBuzz');
}
else {
    console.log(randomNumber)
}