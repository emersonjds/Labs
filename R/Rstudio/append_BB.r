#Passos
#1) Ordenação dos dados e limpeza, pq modelo estat é preguiçoso
#2) 

# Import Excel
attach(Apend_BB)

#orde
Apend_BB[order(Apend_BB$id, decreasing = FALSE),]
unique(Apend_BB)

#remover_duplicados
#recriar o arquivo mas retirando as duplicatas e pegando o ultimo dado duplicado 
remover_duplicados <- Apend_BB [!duplicated(Apend_BB$id, fromLast = TRUE),];
remover_duplicados

#recriar o arquivo mas retirando as duplicatas e pegando o primerio dado duplicado 
remover_duplicados2 <- Apend_BB [!duplicated(Apend_BB$id, fromLast = FALSE),];


