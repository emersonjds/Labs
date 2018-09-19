rm(list=ls(all=TRUE))

workData <- read.csv("C:/Users/cedro_nds/Desktop/Trabalho R/trabalho_3.csv", header=TRUE)


options("scipen" = 2)

dir()

attach(workData)

workData <-read.table(file="C:/Users/cedro_nds/Desktop/Trabalho R/trabalho_3.csv", header=T,sep=",")


attach(workData)

sexo <- as.factor(Sexo)

cor_pele <- as.factor(Cor_pele)

fa_pop=table(sexo)

fa_pop

fr_pop=fa_pop/sum(fa_pop)
fr_pop

fp_pop=100*fr_pop 

fp_pop

dist_pop=cbind(fa_pop,fp_pop) 

dist_pop

install.packages("fdth")

require(fdth)

x=fdt(idade)

classe=fdt(idade,breaks="Sturges")

classe

summary(idade)

summary(Anos_estudo)

pie(table(sexo))

text(locator(n=1), paste(round(prop.table(table(sexo))[1], digits=2)*100,"%"))

text(locator(n=1), paste(round(prop.table(table(sexo))[2], digits=2)*100,"%"))


fa_pop=table(sexo) #frequencia absoluta

barplot(fa_pop) #plota gráfico

plot(sexo) ##plota gráfico


amostra <- workData[sample(1: nrow (workData), 40, replace=FALSE),]


sexo_amostra <- as.factor(amostra$Sexo)

cor_pele_amostra <- as.factor(amostra$Cor_pele)

fa_ams=table(amostra$Sexo) ##frequencia absoluta

fa_ams


fr_ams=fa_ams/sum(fa_ams) ##frequencia relativa

fr_ams

fp_ams=100*fr_ams ##fp=frequencia percentual

fp_ams

dist_ams=cbind(fa_ams,fr_ams,fp_ams) ##distribuicao de frequências

dist_ams

summary(amostra$idade)


summary(amostra$Anos_estudo)

sexo<-as.factor(Sexo)

cor_pele<-as.factor(Cor_pele)

k <- sum(amostra$Telefone_movel== 2); k

prop_tel = k/40; prop_tel

SE = sqrt(prop_tel∗(1−prop_tel)/40); SE

E = qnorm(.975)∗SE; E

prop_tel + c(−E, E)
