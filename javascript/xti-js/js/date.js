/*
Date Object
 */

var data = new Date();

document.writeln(data + "</br>");
document.writeln(data.getMilliseconds() + "</br>");
document.writeln(data.toDateString() + "</br>"); //converte a data em string
document.writeln(data.toLocaleDateString() + "</br>"); //converte a data em string a partir da posição atual 

document.writeln(data.getHours() + "</br>");
document.writeln(data.getUTCHours() + "</br>");

document.writeln(data.getDate() + "/ " +  (data.getMonth() + 1 ) + " /" + data.getFullYear() + "</br>");

