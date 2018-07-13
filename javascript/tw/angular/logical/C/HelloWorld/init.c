#include <stdio.h>

void main() {
  char letra = 'teste';
scanf("%c", &letra);
// Enquanto o usu�rio n�o apertar ENTER, o console aguardar� o usu�rio terminar a digita��o.
// Quando ENTER for pressionado, o scanf() far� a leitura e transportar� o valor lido para a vari�vel apontada

char nome[50]; // Um nome de at� 50 caracteres
scanf("%s", &nome);

int numero = 0;
scanf("%d", &numero);

float numeroQuebrado = 0;
scanf("%f", &numeroQuebrado);
}
