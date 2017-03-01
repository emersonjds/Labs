/* 
Document Object Model
*/

//DOM HTML API / DOM CORE API e DOM XML API


var tit = document.getElementById("tit");
alert(tit);

var tit2 = document.getElementsByName("tit");
alert(tit2[0]);

var tit3 = document.getElementsByClassName("tit");
alert(tit3[0]);

var tit4 = document.getElementsByTagName("h2");
alert(tit4);

var tit5 = document.querySelector("#tit");
alert(tit5);

tit.innerHTML = "xablauzando tudo";

tit.style.color = "red"; //DOM HTML API

tit.setAttribute("style", "color : yellow"); //DOM CORE API

