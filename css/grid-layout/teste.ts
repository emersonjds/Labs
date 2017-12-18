export class Vetor {

    constructor() {
    // declaracao do array (VETOR)
    let vet:number[] = new Array[10];

     //  variavel que vai armazenar o numeros informados pelo usuario
     let valor: number;     

    //  laço de repetiçao para verificar se i é menor do que a quantidade de elementos na lista de numeros

    let numeroDigitadoPeloUsuario: number;

     for(var i = 0; i<= vet.length; i++) {
         //verifica se o valor do indice é par 
        if(vet[i] % 2 == 0) {
            //se for par ele pega o valor do indice e soma com o valor digitado do usuario 
            vet[i] += numeroDigitadoPeloUsuario;
        } else {
            //se nao ele pega o valor do indice e subtrai do valor informado pelo usuario
            vet[i] -= numeroDigitadoPeloUsuario;
        }
     }

    }
}

let vetorNumerico: number[] = new Array[10];

// preenchimento do vetor com numeros aleatorios

vetorNumerico.push(10,20,30,40,67.34,93,12, 94,10);