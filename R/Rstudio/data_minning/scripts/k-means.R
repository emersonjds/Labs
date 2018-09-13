# limpar memória do R
rm(list=ls(all=TRUE))

# mostrar até 2 casas decimais
options("scipen" = 2)



install.packages("corrgram")
install.packages("tclust")
install.packages("cluster")
install.packages("fpc")
 

# Ler arquivo csv

arq01 <- read.table ("C:/Users/logonrmlocal/Desktop/minning/DADOS_Papercsv_1.csv", sep=";", row.names=1 , header=T)
fix(arq01)


str(arq01)
 
#Estatísticas descritivas
summary(arq01)


attach(arq01)
par (mfrow=c(1,2))
boxplot(p100ms)
hist(p100ms)

#comando para gerar em 4 linhas e 2 colunas os histogramas
par (mfrow=c(4,2))
hist(arq01$p100ms)
hist(arq01$p200ms)
hist(arq01$p400ms)
hist(arq01$p800ms)
hist(arq01$p1500mm)
hist(arq01$p3000mm)
hist(arq01$pmaratm)

par (mfrow=c(1,1))


# matriz de correlações

matcor <- cor(arq01)
print(matcor, digits = 2)

library(corrgram)
corrgram(matcor, type = "cor", lower.panel = panel.shade, upper.panel = panel.pie)



install.packages("corrplot")
library(corrplot)

corrplot::corrplot(matcor, method="circle", order="hclust")


panel.cor <- function(x, y, digits=2, prefix ="", cex.cor,
    ...)  {
    usr <- par("usr")
    on.exit(par(usr))
    par(usr = c(0, 1, 0, 1))
    r <- cor(x, y , use = "pairwise.complete.obs")
    txt <- format(c(r, 0.123456789), digits = digits) [1]
    txt <- paste(prefix, txt, sep = "")
    if (missing(cex.cor))
        cex <- 0.8/strwidth(txt)
# abs(r) é para que na saída as correlações ficam proporcionais
    text(0.5, 0.5, txt, cex = cex * abs(r))
}

#pdf(file = "grafico.pdf")
pairs(arq01, lower.panel=panel.smooth, upper.panel=panel.cor)


  


Padr_arq01 <- scale(arq01)
fix(Padr_arq01)


#método hierarquico

hier_cluster<-hclust(dist(Padr_arq01),method='ward.D2')
d <- dist(Padr_arq01, method = "euclidean") # distance matrix
plot(hier_cluster, ylab='distancia', cex=0.6)

groups <- cutree(hier_cluster, k=5) # cut tree into 5 clusters
# draw dendogram with red borders around the 5 clusters
rect.hclust(hier_cluster, k=5, border="red") 

# Outros métodos que podem ser usados são: "ward", "single", "complete", "average", "mcquitty", "median" ou "centroid".
# A definição de qual método usar varia com o objetivo do estudo e com o tipo de matriz de distância usada.




#método não hierarquico

# Determine number of clusters
wss <- (nrow(Padr_arq01 )-1)*sum(apply(Padr_arq01 ,2,var))
for (i in 2:15) wss[i] <- sum(kmeans(Padr_arq01 ,iter.max=100,
                                     centers=i)$withinss)
plot(1:15, wss, type="b", xlab="Number of Clusters",
     ylab="Within groups sum of squares") 


library(tclust)
data(Padr_arq01 )
clus_teste <- tkmeans(Padr_arq01 , k = 5, alpha = 0.01)
plot(clus_teste)

attach(Padr_arq01)
set.seed(26)
output_cluster<-kmeans(Padr_arq01,5,iter=100)
output_cluster

centros<-output_cluster$centers
centros

Qte_iter<-output_cluster$iter
Qte_iter

membros<-output_cluster$cluster
table (membros)

# Mostrando Resultados
aggregate(arq01,by=list(membros),FUN=mean)


# Mostrando Resultados em gráficos

# Cluster Plot against 1st 2 principal components
# vary parameters for most readable graph
library(cluster)
clusplot(Padr_arq01, output_cluster$cluster, color=TRUE, shade=TRUE,
         labels=2, lines=0 , cex=0.75)

# Centroid Plot against 1st 2 discriminant functions
library(fpc)
plotcluster(Padr_arq01, output_cluster$cluster) 


# junta os arquivos em colunas
matriz<-cbind(arq01,Padr_arq01,membros)
fix(matriz)

# append cluster assignment
matriz<- data.frame(arq01,Padr_arq01, membros) 
fix(matriz)

write.table(file='G:/LabBDT2018/Paises_cluster.csv',matriz, sep=';',dec=',')




#avaliar inicio
summary(Padr_arq01)


# Estatísticas de adequação KMO. 
# KMO: é um critério para identificar se um modelo de análise fatorial que está sendo utilizado é adequadamente ajustado aos dados,
# testando a consistência geral dos dados
# Valores de KMO e respectiva Análise de componentes principais 
# 1,00- 0,90 Muito boa / 0,80-0,90 Boa / 0,70-0,80 Média / 0,60-0,70 Razoável /0,50-0,60 Má / < 0,50 Inaceitável


#### ANALISES FATORIAL Pacote PSYCH
library(psych)

KMO(matcor)



# componentes principais  

acpcor <- prcomp(Padr_arq01, scale = TRUE) 
summary(acpcor)

plot(1:ncol(Padr_arq01), acpcor$sdev^2, type = "b", xlab = "Componente",
     ylab = "Variância", pch = 20, cex.axis = 1.3, cex.lab = 1.3)

sum(acpcor$sdev^2)

acpcor$rotation[, 1:7]

print(acpcor$sdev[1:7] * t(acpcor$rotation[, 1:7]), digits = 3)


biplot(acpcor, xlab = "CP1", ylab = "CP2",cex.lab = 1.0, cex.axis = 1.0)
 
acpcor <- prcomp(Padr_arq01, scale = TRUE, retx = TRUE)

escore1 <- acpcor$x[, 1]
print(escore1)
hist(escore1)

escore2 <- acpcor$x[, 2]

par (mfrow=c(1,2))
hist(escore1)
hist(escore2)
par (mfrow=c(1,1))

# veja a correlaçãeo entre os 2 componentes.
print(cor(escore1,escore2), digits = 2)


escores<-cbind(escore1,escore2)

#método não hierarquico

# Determine number of clusters
wss <- (nrow(escores)-1)*sum(apply(Padr_arq01 ,2,var))
for (i in 2:15) wss[i] <- sum(kmeans(escores ,iter.max=100,
                                     centers=i)$withinss)
plot(1:15, wss, type="b", xlab="Number of Clusters",
     ylab="Within groups sum of squares") 


library(tclust)
clus_teste <- tkmeans(escores, k = 5, alpha = 0.01)
plot(clus_teste)

set.seed(28)
output_cluster<-kmeans(escores,5,iter=100)
output_cluster

centros<-output_cluster$centers
centros

Qte_iter<-output_cluster$iter
Qte_iter

membros<-output_cluster$cluster
table (membros)

matriz<- data.frame(arq01,Padr_arq01,escores, membros) 
fix(matriz)


# Mostrando Resultados
aggregate(matriz,by=list(membros),FUN=mean)
