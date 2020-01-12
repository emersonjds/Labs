void main() {
  int cont = 0;
  for (;;) {
    cont++;
    print("O valor do contador é $cont");
    if (cont == 10000) {
      print("Atingi o valor de 10000");
      break;
    }
  }
  print("Finalizando o for infinto");
}
