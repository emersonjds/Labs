#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// Lib necessary for comparation of string and another data structures

int main()
{
    float totalArea, buildingArea = 0;
    printf("Digite a area do terreno ");
    scanf("%f", &totalArea);
    printf("Digite a area construida");
    scanf("%f", &buildingArea);
    float areaNotBuilding = totalArea - buildingArea;
    float taxBuildingArea = 5 * totalArea;
    float taxAreaNotBuilding = 3.80 * areaNotBuilding;
    float totalTax = taxAreaNotBuilding + taxAreaNotBuilding;
    printf("Total do imposto a pagar %f", totalTax);
    return 0;
}
