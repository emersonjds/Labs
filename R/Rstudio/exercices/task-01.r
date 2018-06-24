nameList = c("Emerson", "Flávio", "Maria", "José", "Larissa")
lastNameList = c("Silva", "Sousa", "Santana", "Arimatéia", "Borges")
nationalID = c("39601750860","06503903693", "63681841837", "58327888420", "65854329247")
ageList = c(28, 34, 45, 70, 16)

df = data.frame(nameList, lastNameList, nationalID, ageList)

df$digit = substr(nationalID, 9, 9)
df$fullName =  paste(df$nameList, df$lastNameList, sep = " ")
df