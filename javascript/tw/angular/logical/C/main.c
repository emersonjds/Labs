#include <stdio.h>
#include <stdlib.h>

int main ()
{
  /*
   declarações: todas as variáveis utilizadas
   precisam ser declaradas
  */
  int idade;

  /* programa */
  printf("Quantos anos voce tem? \n");
  scanf("%d", &idade);

  printf("%d? Puxa, voce parece que tem so %d anos!\n", idade, idade * 2);

  /* fim do programa */
  system ("pause");
  return 0;
}