# matriz <- matrix(nrow = 3, ncol = 4)
#matriz 

#matriz <-matrix(data=1:12, nrow = 3, ncol = 4)
#matriz

#matriz <-matrix(data=1:12, nrow = 3, ncol = 4, byrow = T)
#matriz

#matriz[2,4]
#matriz[3,]
#matriz[,3]

#List

estudante <- list(rbind(nome=c("edmar", "pedro"),
                        idade=c(30,20),
                        escola=c("MBA", "Graduação")))

estudante

# c = create colum 

#data.frame
nome <-c("Edmar", "Pedro")
idade <-c(30,20)
salario <-c(1000,2000)
aumento <-c((salario * 0.06) + salario)
cadastro <-data.frame(nome,idade,salario, aumento)
cadastro
filhos <-c(1,2)
cadastro$filhos <-filhos
cadastro

#criar arquiv e importar para csv
write.csv2(cadastro, file = "teste.csv")






