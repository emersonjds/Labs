
Bank <- read_excel("E:/Outras/Arquivos de Aula - Linguagem R/Arquivos Aulas Fiap/Bank.xlsx")
View(Bank)

attach(Bank)
regressao <-lm(salbeg1 ~ edlevel+sex)
summary(regressao)


anova(regressao)


preditos1 <-fitted(regressao)
preditos


Bank$preditos1 <-c(preditos1)
Bank


boxplot(salbeg~sex)




# Regressão Logistica

library(readxl)
Bebes <- read_excel("E:/Outras/Arquivos de Aula - Linguagem R/Arquivos Aulas Fiap/Bebes.xlsx")
View(Bebes)

attach(Bebes)
require(glm)
Logistica <-glm (low ~ age + lwt +smoke +ptl + ht
                 , family=binomial(link = "logit"))

stepwise <-step(Logistica, direction = "both")
summary(stepwise)


exp(cbind(OR = coef(stepwise), confint(stepwise)))


predito <-predict(stepwise)
predito <- ifelse(predito >= 0.5,1,0)

Bebes$predito<-c(predito)

table(predito,low)


classificacao_geral <-((244+22)/(244+96+16+22))*100
classificacao_geral



table(predito,low)

install.packages("ResourceSelection")
require(ResourceSelection)
bondade_ajuste <- hoslem.test(low, predito, g=2)
bondade_ajuste

