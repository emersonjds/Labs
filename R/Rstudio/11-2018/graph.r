attach(Banco_1)
barplot(prop.table(Banco_1$sexo))*100, col=c("blue", "red")
title("Frequencia relativa", xlab = "sexo", ylab = "%")

# ----------------------------------------------------------

library(ggplot2)
attach(Bank)
dispersao <- ggplot(Bank, aes(x=age, y=salbeg, color=sex))
dispersao <- geom_point()

attach(Bank)
dispersao <- ggplot(Bank, aes(x=age, y=salbeg))
dispersao - geom_point() - facet_wrap(~sex)
boxplot(Banco_1$idade ~Banco_1$sexo)

a <- c(0,1,1,1,2,3,5,4)
a
boxplot(a)

selecao <-Banco_1[,c("id", "situacao")]
selecao
selecao <-Banco_1[Banco_1$sexo=="masculino",]
selecao
selecao <-Banco_1[Banco_1$sexo=="masculino" && Banco_1$idade >= 20,]
selecao
selecao <-Banco_1[Banco_1$sexo=="masculino" && Banco_1$idade >= 20,]
selecao