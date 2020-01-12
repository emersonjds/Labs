void main() {
  print("test conditionals");
  int age = 30;
  var high = 178;

  age >= 18
      ? print("You are of legal age, move on")
      : print("You aren't of legal age, sorry, go to your home");

  if (high < 150) {
    print("you're small");
  } else if (high >= 150 && high < 175) {
    print("you're medium");
  } else if (high >= 175 && high < 195) {
    print("you're tall");
  } else {
    print("you're giant");
  }
}
