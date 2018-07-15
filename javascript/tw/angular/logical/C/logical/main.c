#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero1, numero2;
    printf("Digite o valor de numero 1: ");
    scanf("%d", &numero1);
    printf("Digite o valor de numero 2: ");
    scanf("%d", &numero2);
    printf("%d > 10 e %d > 20 ?! %d \n", numero1, numero2, numero1 > 10 && numero2 > 20);
    //with returns 0 equals false
    printf("%d > 10 ou %d > 20 ?! %d \n", numero1, numero2, numero1 > 10 || numero2 > 20);
    printf("nao %d > 10 e nao %d > 20 ?! %d \n", numero1, numero2, !(numero1 > 10) && !(numero2 > 20));
    printf("nao %d > 10 e nao %d > 20 ?! %d \n", numero1, numero2, !(numero1 > 10) || !(numero2 > 20));
    return 0;
}
