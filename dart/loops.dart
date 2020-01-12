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
}
