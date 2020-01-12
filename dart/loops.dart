void main() {
  int cont = 0;
  int cont_x = 11;

  //verify after execution
  while (cont <= 10) {
    print("o valor do contador é $cont");
    cont++;
  }

  // execute once a time to verify value
  do {
    print("O valor de x é $cont_x");
  } while (cont_x <= 10);

  for (var n = 0; n <= 10; n++) {
    print("o valor de n eh $n");
  }

  int soma = 0;
  for (int i = 1; i <= 1000; i++) {
    soma = soma + i;
  }
  print(soma);
}
