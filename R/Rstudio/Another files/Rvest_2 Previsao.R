

library(rvest)
pagina <- html("http://www.ipeadata.gov.br/ExibeSerie.aspx?serid=40940&module=M")
dados <-pagina %>%
  html_nodes(".dxgvDataRow")%>%
  html_text()

dados<-gsub("rnttt","",dados)
dados<-gsub("[[:punct:]]","",dados)

data <-substr(dados,1,8)
risco <-substr(dados,9,11)
risco <-gsub("[[:punct:]]","",risco)

tabela <-data.frame(data,risco,stringsAsFactors = FALSE)

tabela


is.character(risco)
risco <-as.numeric(as.character(risco))
is.numeric(risco)

boxplot(risco)
plot.ts(risco)



library(forecast)
arima <-auto.arima(risco)
arima

previsao <- forecast(arima, h=1)
previsao


plot(previsao)

##############################################################################################

library(readxl)
nuvem <- read_excel("E:/Arquivos de Aula - Linguagem R/Arquivos Aulas Fiap/nuvem.xlsx")
View(nuvem)

attach(nuvem)
head(nuvem)
library(wordcloud)
wordcloud(words=nuvem$words, freq=nuvem$Freq,min.freq = 5,random.order=FALSE,
          colors = brewer.pal(12,"Paired"))



# Pacotes de cor RColorBrewer

