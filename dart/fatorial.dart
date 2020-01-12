void main() {
  int sum = 0;
  int fatorial = 1;

  for (int i = 1; i <= 15; i++) {
    fatorial *= i;
    sum += fatorial;
  }
  print("O resultado e $sum");
}
