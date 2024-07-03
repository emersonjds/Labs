import { verifyPoints } from "./challenges/challenge-02.js";

alert("Welcome to secret number game");

let secretNumber = 40;

let otherNumber = prompt("Choose a number between 0 and 30");

if (otherNumber == secretNumber) {
  console.log(`You got it the right number ${secretNumber}`);
} else {
  alert("You wrong the answer");
}

verifyPoints();
