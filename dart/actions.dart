void main() {
  double buyDay = 3.45;
  double sellDay = 4.23;
  int quantity = 50;

  bool isHigher = (buyDay * quantity) > (sellDay * quantity);

  if (!isHigher) {
    print("Your actions earn money");
  } else {
    if (isHigher) {
      print("You're losing money");
    }
  }
}
