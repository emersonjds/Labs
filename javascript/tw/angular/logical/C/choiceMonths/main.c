#include <stdio.h>
#include <stdlib.h>

int main()
{
    int mes;
    printf("Digite o numero do mes ");
    scanf("%d", &mes);
    switch (mes)
    {
    case 1:
        printf("O mes digitado é Janeiro");
        break;
    case 2:
        printf("O mes digitado é Feveiro");
        break;
    case 3:
        printf("O mes digitado é Marco");
        break;
    case 4:
        printf("O mes digitado é Abril");
        break;
    case 5:
        printf("O mes digitado é Maio");
        break;
    case 6:
        printf("O mes digitado é Junho");
        break;
    case 7:
        printf("O mes digitado é Julho");
        break;
    case 8:
        printf("O mes digitado é Agosto");
        break;
    case 9:
        printf("O mes digitado é Setembro");
        break;
    case 10:
        printf("O mes digitado é Outubro");
        break;
    case 11:
        printf("O mes digitado é Novembro");
        break;
    case 12:
        printf("O mes digitado é Dezembro");
        break;
    default:
        printf("Numero informado nao corresponde a um mes valido");
    }
    return 0;
}
