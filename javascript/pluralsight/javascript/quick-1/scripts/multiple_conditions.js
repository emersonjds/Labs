var randomNumber = Math.round(Math.random() * 5);

if (randomNumber % 3 === 0) {
    alert('Fizz');
} else if (randomNumber % 5 === 0) {
    alert('Buzz')
} else {
    alert('The number choice is ' + randomNumber);
}