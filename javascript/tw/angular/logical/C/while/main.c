#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// Lib necessary for comparation of string and another data structures

int main()
{
    char name;
    while (strcmp(&name, "PARAR") != 0)
    //function of comparation string with another structure
    {
        printf("Informe o nome : ");
        scanf("%s", &name);
        printf("Ola , %s", &name);
    }
    return 0;
}
