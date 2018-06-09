#2

faixasal = cut(Banco$salarin, breaks = c(0,15000,35000,45000,55000,135000), labels = c(1,2,3,4,5), right = T)
Banco$faixasal = faixasal
Banco
View(Banco)

#3 (Se tiver tempo)

Banco$percent = (Banco$salário - Banco$salarin) / Banco$salarin * 100

Banco
View(Banco)