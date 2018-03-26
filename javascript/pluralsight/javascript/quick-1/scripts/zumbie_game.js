alert('It is the zombie apocalipse. You are looting a store and suddenly a zombie bursts throught the door !');
var weapon = prompt('Insert your weapon');
var randomNumber = Math.round(Math.random());

alert('You atack the zombies with your ' + weapon);

if (randomNumber === 0) {
    alert('The zombie bites you. You lose');
} else if (randomNumber === 1) {
    alert('The kill the zombie with your ' + weapon);
}