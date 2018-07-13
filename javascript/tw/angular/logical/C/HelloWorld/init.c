#include <stdio.h>

void main() {
  char letra = '';
scanf("%c", &letra);
// Enquanto o usuário não apertar ENTER, o console aguardará o usuário terminar a digitação.
// Quando ENTER for pressionado, o scanf() fará a leitura e transportará o valor lido para a variável apontada

char nome[50]; // Um nome de até 50 caracteres
scanf("%s", &nome);

int numero = 0;
scanf("%d", &numero);

float numeroQuebrado = 0;
scanf("%f", &numeroQuebrado);
}
