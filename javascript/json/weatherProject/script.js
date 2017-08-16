'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();

var cObj;
var fObj;

//Get Conditions
weatherConditions.open('GET', 'http://api.wunderground.com/api/b8272d3f8bd0120c/conditions/q/32789.json', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = () => {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);
    }
}


weatherForecast.open('GET', 'http://api.wunderground.com/api/b8272d3f8bd0120c/forecast/q/32789.json', true);
weatherForecast.responseType = 'text';
weatherForecast.send();

weatherForecast.onload = () => {
    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);
    }
}



