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
		logico primeiroNumeroMaiorIgualSegundoNumero = n1 >= n2
		logico primeiroNumeroMenorIgualSegundoNumero = n1 <= n2 

		escreva("Primeiro numero � maior que segundo numero ?! ", primeiroNumeroMaiorSegundoNumero, "\n")
		escreva("Primeiro numero � igual que segundo numero ?! ", primeiroNumeroIgualSegundoNumero, "\n")
		escreva("Primeiro numero � menor que segundo numero ?! ", primeiroNumeroMenorSegundoNumero, "\n")
		escreva("Primeiro numero � maior ou igual ao segundo numero ?! ", primeiroNumeroMaiorIgualSegundoNumero, "\n")
		escreva("Primeiro numero � menor ou igual ao segundo numero ?! ", primeiroNumeroMenorIgualSegundoNumero, "\n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 314; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */