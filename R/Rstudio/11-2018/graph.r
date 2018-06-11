attach(Banco_1)
barplot(prop.table(Banco_1$sexo))*100, col=c("blue", "red")
title("Frequencia relativa", xlab = "sexo", ylab = "%")

# ----------------------------------------------------------

library(ggplot2)
attach(Bank)
dispersao = ggplot(Bank, aes(x=age, y=salbeg))