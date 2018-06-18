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


