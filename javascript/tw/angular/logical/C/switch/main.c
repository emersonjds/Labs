#include <stdio.h>
#include <stdlib.h>

int main()
{
    char opcao;
    printf("Usuario, voce é maior de idade ?! ");
    scanf("%s", &opcao);
    switch (opcao)
    {
    case 'S':
        printf("Usuario maior de idade");
        break;
    case 'N':
        printf("Usuario nao é maior de idade");
        break;
    default:
        printf("Opcao invalida");
        break;
    }
    return 0;
}
