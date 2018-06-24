Banco_1
filhosNormal <-Banco_1$filhos        
mean(filhosNormal, na.rm = TRUE)

table(Banco_1$sexo)
table(Banco_1$Situacao)
table(Banco_1$sexo, Banco_1$Situacao)

library(gmodels)
CrossTable(Banco_1$sexo, Banco_1$Situacao)

#teste estatistico qui_quadrado em cima das colunas chamadas
CrossTable(Banco_1$sexo, Banco_1$Situacao, chisq = TRUE)
