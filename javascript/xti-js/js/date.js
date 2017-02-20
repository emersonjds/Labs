/*
Date Object
 */

var data = new Date();

document.writeln(data + "</br>");
document.writeln(data.getMilliseconds() + "</br>");
document.writeln(data.toDateString());

document.writeln(data.getDate() + "/ " +  (data.getMonth() + 1 ) + " /" + data.getFullYear() + "</br>");

