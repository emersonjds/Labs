programa
{
	funcao inicio()
	{
		inteiro n1
		inteiro n2

		escreva("Digite o primeiro numero ")
		leia(n1)
		escreva("Digite o segundo numero ")
		leia(n2)

		logico primeiroNumeroMaiorSegundoNumero = n1 > n2
		logico primeiroNumeroIgualSegundoNumero = n1 == n2
		logico primeiroNumeroMenorSegundoNumero = n1 < n2

		escreva("Primeiro numero é maior que segundo numero ?! ", primeiroNumeroMaiorSegundoNumero, "\n")
		escreva("Primeiro numero é igual que segundo numero ?! ", primeiroNumeroIgualSegundoNumero, "\n")
		escreva("Primeiro numero é menor que segundo numero ?! ", primeiroNumeroMenorSegundoNumero, "\n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 614; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */