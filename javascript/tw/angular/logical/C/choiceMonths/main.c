#include <stdio.h>
#include <stdlib.h>

int main()
{
     int a, b, c;
    printf("Informe o lado a ");
    scanf("%d", &a);
    printf("Informe o lado b ");
    scanf("%d", &b);
    printf("Informe o lado a ");
    scanf("%d", &c);
    if (a == b && b == c)
    {
        printf("O triangulo digitado é equilatero");
    }
    else if (a == b && b != c)
    {
        printf("O triangulo digitado é escaleno");
    }
    else
    {
        printf("O triangulo com as medidas digitadas é isosceles");
    }
    return 0;
}
