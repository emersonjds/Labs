// Week Day

let weekDay = "";

weekDay = prompt("What day is today ?!");

if (weekDay == "Saturday" || weekDay == "Sunday") {
  console.log("Have a nice weekend");
} else {
  console.log("Have a nice week");
}

// Number Type

let number = null;

number = prompt("Write a number");

if (number < 0) {
  console.log(`You write ${number}, this number is negative`);
} else {
  console.log(`You write ${number}, this number is positive`);
}
