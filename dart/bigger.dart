void main() {
  int n1 = 18;
  int n2 = 65;
  int n3 = 45;

  int maior;

  if (n1 > n2 && n1 > n3) {
    maior = n1;
  } else if (n2 > n1 && n2 > n3) {
    maior = n2;
  } else {
    maior = n3;
  }
  print(" O maior numero e o de valor $maior");
}
