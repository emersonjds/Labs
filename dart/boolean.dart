void main() {
  var high_age = 16;
  bool isHighAge = high_age >= 18;
  bool accompanied = false;

  if (isHighAge) {
    print("cmon your are legal");
  } else {
    if (!accompanied) {
      print("cmon your are legal, you're accompanied");
    }
    print("Sorry, you're not legal");
  }
}
