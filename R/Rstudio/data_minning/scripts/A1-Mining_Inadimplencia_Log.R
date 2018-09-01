# Técnica de Discriminação:  Logistica.

# limpar memória do R
rm(list=ls(all=TRUE))

Inad <- read.table ("F:/LabBDT2018/Inadimplencia.csv", sep=";", row.names=1 , header=T)

attach(Inad)

str(Inad )

fix(Inad)

summary(Inad)


# Frequência absoluta 
table(Inad$Atrasos, Inad$Resposta)

# Frequência relativa
# cell percentages
prop.table(table(Atrasos,Resposta))


# column percentages 
prop.table(table(Atrasos,Resposta),2)

# row percentages
prop.table(table(Atrasos,Resposta),1)


# 3-Way Frequency Table
Tabela3dim <- xtabs(~Atrasos+valorFatura+Resposta, data=Inad)
ftable(Tabela3dim) # print table
summary(Tabela3dim) # chi-square test of indepedence 



#comando para gerar em 4 linhas e duas colunas os plots
par (mfrow=c(3,2))
plot(Inad$Atrasos, Inad$Resposta)
plot(Inad$TempoRel, Inad$Resposta)
plot(Inad$valorFatura, Inad$Resposta)
plot(Inad$GastosAlim, Inad$Resposta)
plot(Inad$RegRisc , Inad$Resposta)
plot(Inad$RendaMensal, Inad$Resposta)



#impor para o R considerar como categórica.
# se precisar!

Inad$Resposta <- factor(Inad$Resposta)

par (mfrow=c(3,2))
plot(Inad$Atrasos, Inad$Resposta)
plot(Inad$TempoRel, Inad$Resposta)
plot(Inad$valorFatura, Inad$Resposta)
plot(Inad$GastosAlim, Inad$Resposta)
plot(Inad$RegRisc , Inad$Resposta)
plot(Inad$RendaMensal, Inad$Resposta)

dev.off()

#Divisao do banco de dados completo em treinamento e teste
#definir % de casos de treino
prt <- 3/4

# amostra de casos de treino aleatória
treino <- sample(1:NROW(Inad), as.integer(prt*NROW(Inad)))

# amostra de casos de treino sequencial temporalmente
#treino <- seq(1,prt*NROW(Inad), by=1)

trainData <- Inad[treino,]
testData  <- Inad[-treino,]


prop.table(table(trainData$Resposta))
prop.table(table(testData$Resposta))


#Modelo Logistico

attach(trainData)

Mod_Inad<- glm(Resposta ~ Atrasos + TempoRel + valorFatura + GastosAlim + RegRisc     
                 + RendaMensal,trainData, family=binomial(link=logit))
summary(Mod_Inad)


predito<-fitted(Mod_Inad)

summary(predito)

hist(predito)

### Matriz de confusão  

trainData$fx_predito <- cut(predito, breaks=c(0,0.50,1), right=F)

MC <- table(trainData$Resposta, trainData$fx_predito , deparse.level = 2) # montar a matriz de confusão  
show(MC) # mostra os resultados  
ACC = sum(diag(MC))/sum(MC) # calcula a acurácia  
show(ACC) # mostra a acurácia  


# Criar variável faixa probabilidade
fx_predito1 <- cut(predito, breaks=c(0,0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90,1), right=F)

# Frequência absoluta
table(fx_predito1,trainData$Resposta)

# Frequência relativa
prop.table(table(fx_predito1,trainData$Resposta),2)

plot(fx_predito1 , trainData$Resposta)


fx_predito2 <- cut(predito, breaks=c(0,0.25,0.50,0.75,1), right=F)

plot(fx_predito2 , trainData$Resposta)



preds1_log <- predict(Mod_Inad,testData)
summary(preds1_log)   

preds2_log <- predict(Mod_Inad,testData,type = "response")
summary(preds2_log)   

hist(preds2_log )
testData$Pontua <- cut(preds2_log, breaks=c(0,0.50,1), right=F)

### Matriz de confusãoTeste

MC_test <- table(testData$Resposta, testData$Pontua , deparse.level = 2) # montar a matriz de confusão  
show(MC_test) # mostra os resultados  
ACC_test = sum(diag(MC_test))/sum(MC) # calcula a acurácia  
show(ACC_test) # mostra a acurácia  


plot(testData$Pontua , testData$Resposta)

prop.table(table(testData$Pontua ,testData$Resposta),2)




