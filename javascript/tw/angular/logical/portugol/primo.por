programa
{
	funcao inicio()
	{
		inteiro numero
		inteiro quantidadeDeDivisores = 0
		escreva("Escreva um numero aleatorio ")
		leia(numero)
		para (inteiro i = 1; i <= numero ; i++) {
			se (numero % i == 0 ) {
				quantidadeDeDivisores++
			}
		}
		se (quantidadeDeDivisores == 2) { 
			escreva("O numero ", numero, " � primo")
		} senao {
			escreva("O numero digitado ", numero, " nao � primo")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 320; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */