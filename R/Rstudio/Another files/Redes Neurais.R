

attach(consolidado)
library(neuralnet)
net <-neuralnet(default1~salario + QtdaParcelas +
                  NúmerodeFilhos+Idade+compromento_1+
                  TempodeResidência+fx_etaria+ValorEmprestimo+TempodeServiço+QtdaPagas, 
                data=consolidado, hidden=10)
net



plot(net)





