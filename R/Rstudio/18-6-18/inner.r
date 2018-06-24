#all = full join
#all.x = left join
#all.y = right join 

attach(Apend_A)
fulljoin <- merge(Apend_A, Apend_B, by=c("id"), all = TRUE) #all = full join
fulljoin

leftjoin <- merge(Apend_A, Apend_B, by=c("id"), all.x = TRUE) #left join
leftjoin

rightjoin <- merge(Apend_A, Apend_B, by=c("id"), all.y = TRUE) #left join
rightjoin

#sql library
library(sqldf)
selecionados <- sqldf("select * from Apend_A where idade >= 12")
selecionados

sql = sqldf("select * from Apend_A
            inner join Apend_B on
            Apend_A.id = Apend_B.id")
sql

attach(Banco)
subset(Banco, estudo = 10 % sexo == 1)
selectionados <- Banco[10:20, c("id"),]

boxplot(salario)
boxplot(salario, outline=FALSE)

x=rnorm(100), mean(=10, sd=2)
x
hist(x)
density(x)
plot(x)
qqnorm(x); qqline(x)
hist(density)

Banco[order(Banco$salario, decreasing=TRUE),]
replace(salario, Salario=100000, 99999)
boxplot(salario)

