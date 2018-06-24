attach(Salario)
library(dplyr)
agregar <-sumarize(group_by(Salario,id),
                   salario_m=mean(salario_m),
                   data_pagamento_min = min_rank(data_pagamento),
                   data_pagemnto_max = max(data_pagamento),
                   frequencia = n())
agregar