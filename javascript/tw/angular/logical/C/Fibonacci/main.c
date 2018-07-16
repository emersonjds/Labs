#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// Lib necessary for comparation of string and another data structures

int main()
{
    int qtdElement = 0;
    printf("Informe a quantidade de elemtos ");
    scanf("%d", &qtdElement);
    int atualValue = 1;
    printf("Sequencia gerada \n ");
    printf("%d ", atualValue);
    int lastNumber = 0;
    int temporary;
    for (int i = 1; i < qtdElement; i++)
    {
        temporary = atualValue;
        atualValue = atualValue + lastNumber;
        lastNumber = temporary;
        printf("%d \n", atualValue);
    }
    return 0;
}
