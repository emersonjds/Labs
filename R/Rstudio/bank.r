attach(Banco)
data_atual <-Sys.Date()
Banco$data_atual <-data_atual
Banco
#cria variavel idade dentro do banco
Banco$idade <-round(difftime(data_atual, datanasc)/365.25)
Banco
min(idade)
max(idade)
View(Banco)

Banco$faixa_etaria <-cut(idade, breaks=c(46,50,60,70,80,89),
                                labels=c(1,2,3,4,5,right = T)            
