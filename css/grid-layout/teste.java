
import java.util.Random;
import java.util.Scanner;

public class Teste {

    public static void main (String[] args){

        Scanner input = new Scanner(System.in);

        // declaração de uma String
        String nome = "Emerson";

        // declaração de numero quebrado;
        Double numeroQuebrado = 32.2;

        int numeroNormal = 10;

        //inicialização de um array de 10 posições vazio
        int vet[] = new int[10];

        //Random responsavel por gerar numeros aleatorios
        Random r = new Random();

        //laço de repetição para inserção dos numeros no array
        for (int i = 0 ; i <= vet.length; i++) {
            //insere numeros aleatorios até 100
            vet[i] = (int)(Math.random() * 10);
        }

        //valor digitado pelo usuario
        int valor = 0;

        //atribuo a valor o que o usuario digitar como numero
        valor = input;

        //aqui o array ja esta preenchido com os numetos aleatorios e as 10 posições estao preenchidas
        for(int i = 0 ; i <= vet.length; i++) {
            //verifica se o valor atribuido a este indice é par 
            if(vet[i] % 2 == 0) {
                vet[i] += valor;
            } else {
                // se nao for par ele subtrai o valor
                vet[i] -= valor;
            }
        }


        // lista que recebe 5 nomes
        String listaDeNomes[] = new String[5];

        Scanner nomeDigitado = new Scanner(System.in);

        
        



    }

}

