# limpar mem�ria do R
rm(list=ls(all=TRUE))

#carregar dados
campanha <- read.table ("C:/Users/logonrmlocal/Desktop/minning/BaseCampanhaVarejo.csv", sep=";", row.names=1 , header=T)

attach(campanha)

fix(campanha)

table(campanha$TempoDesdeUltCompra, campanha$RespCampanha)

#analise percentil colunar
prop.table(table(TempoDesdeUltCompra, 
                 RespCampanha), 2)
# com esta analise foi possivel identificar que o perfil 2 esta presente
# na loja de 2 a 45 dias

#tabela com analise univariada
Tabela2dim <- xtabs(~campanha$TempoDesdeUltCompra+
                     campanha$RendaMensal+
                     campanha$RespCampanha, data=campanha)
ftable(Tabela2dim) # print table
summary(Tabela2dim) # chi-square test of indepedence 

#comando para gerar em 4 linhas e duas colunas os plots

campanha$RespCampanha <- factor(campanha$RespCampanha)

par(mfrow=c(3,2))
plot(TempoDesdeUltCompra, campanha$RespCampanha)
plot(TempoRel, campanha$RespCampanha)
plot(VlMedio, campanha$RespCampanha)
plot(Pct_Vestuario, campanha$RespCampanha)
plot(RegValorCli , campanha$RespCampanha)
plot(RendaMensal, campanha$RespCampanha)

dev.off()

prt <- 3/4

# amostra de casos de treino aleat�ria
treino <- sample(1:NROW(campanha), as.integer(prt*NROW(campanha)))

# amostra de casos de treino sequencial temporalmente
#treino <- seq(1,prt*NROW(Inad), by=1)

trainData <- campanha[treino,]
testData  <- campanha[-treino,]

prop.table(table(trainData$RespCampanha))
prop.table(table(testData$RespCampanha))

#logistic Model

attach(trainData)

mod_campanha <- glm(RespCampanha ~ 
                      trainData$TempoDesdeUltCompra +
                      trainData$TempoRel +
                      trainData$VlMedio +
                      trainData$Pct_Vestuario +
                      trainData$RegValorCli +
                      trainData$RendaMensal,
                    family=binomial(link=logit))

summary(mod_campanha)

predito<-fitted(mod_campanha)

summary(predito)

hist(predito)

#matriz 

trainData$fx_predito <- cut(predito, breaks=c(0,0.50,1), right=F)

MC <- table(trainData$RespCampanha, trainData$fx_predito , deparse.level = 2) # montar a matriz de confus�o  
show(MC) # mostra os resultados  

ACC = sum(diag(MC))/sum(MC) # calcula a acuracia  
show(ACC)

#variavel de probabilidade
fx_prob <- cut(predito, breaks=c(0,0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90,1), right=F)

table(fx_prob, trainData$RespCampanha)

# Frequencia relativa
prop.table(table(fx_prob,trainData$RespCampanha),2)

#grafico de analise probabilista
plot(fx_prob , trainData$RespCampanha)


