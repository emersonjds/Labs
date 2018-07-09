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
		
		escreva("Resultado da operação ", resultadoComOperadorE , "\n")
		escreva("Resultado da operação ", resultadoComOperadorOU , "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 395; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */