#include <stdio.h>
#include <stdlib.h>

int main()
{
    int number;
    printf("Digite o numero que deseja obter a tabuada: ");
    scanf("%d", &number);
    for (int i = 0; i <= 10; i++)
    {
        printf(" %d x %d = %d \n", number, i, number * i);
    }
    return 0;
}
