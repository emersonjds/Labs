#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero;
    printf("Digite um numero ");
    scanf("%d", &numero);
    printf("O numero digitado %d e maior que 10? %d \n", numero, numero > 10);
    printf("O numero digitado %d e maior igual 10? %d \n", numero, numero >= 10);
    printf("O numero digitado %d e menor que 10? %d \n", numero, numero < 10);
    printf("O numero digitado %d e menor igual a 10? %d \n", numero, numero <= 10);
    printf("O numero digitado %d e igual a 10? %d \n", numero, numero == 10);
    printf("O numero digitado %d e diferente de 10? %d \n", numero, numero != 10);
    return 0;
}
