#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero, numero2;
    printf("Digite o valor do primeiro numero ");
    scanf("%d", &numero);
    printf("Digite o valor para o segundo numero ");
    scanf("%d", &numero2);
    printf("%d + %d = %d \n", numero, numero2, numero + numero2);
    printf("%d - %d = %d \n", numero, numero2, numero - numero2);
    printf("%d x %d = %d \n", numero, numero2, numero * numero2);
    printf("%d / %d = %d \n", numero, numero2, numero / numero2);
    printf("O resto da divisao de %d com %d � %d \n", numero, numero2, numero % numero2);
    return 0;
}
