programa
{
	funcao inicio()
	{
		cadeia nome = ""
		enquanto(nome != "sair") {
			escreva("Informe o nome : ")
			leia(nome)
			se (nome != "sair") {
				escreva("Bem vindo ", nome, "\n")	
			}
		}
		escreva("Ate logo")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 131; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */