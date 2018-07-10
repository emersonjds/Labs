programa
{
	funcao inicio()
	{
		inteiro n1
		inteiro n2
		escreva("Digite o primeiro numero: ")
		leia(n1)
		escreva("Digite o segundo numero: ")
		leia(n2)

		logico resultadoComOperadorE = n1 > 10 e n2 > 10
		logico resultadoComOperadorOU = n1 > 10 ou n2 > 20
		logico resultadoComOperadorNao = nao(n1 > 10 ou n2 > 20)
		
		escreva("Resultado da opera��o ", resultadoComOperadorE , "\n")
		escreva("Resultado da opera��o ", resultadoComOperadorOU , "\n")
		escreva("Resultado da opera��o ", resultadoComOperadorNao , "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 525; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */