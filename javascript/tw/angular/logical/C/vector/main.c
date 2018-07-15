#include <stdio.h>
#include <stdlib.h>

int main()
{
    int valores[10];
    for (int i = 0; i <= 9; i++)
    {
        printf("Digite um valor :");
        scanf("%d", &valores[i]);
    }
    for (int i = 0; i <= 9; i++)
    {
        printf("Valores digitados na posicao %d , %d /n", i, valores[i]);
    }
    return 0;
}
