#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("%d", (4 + 5) * 9);
    printf("%d", (20 == 20 || 20 == 5) && 10 > 10);
    //&& operator has procedente of another operators logicals
    int var = 2 + 3 * 4 / 5 - 6;
    printf("%d", var);
    return 0;
}
