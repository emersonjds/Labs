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
        document.getElementById('cidade').innerHTML = cObj.current_observation.display_location.full;
        document.getElementById('condicoes').innerHTML = cObj.current_observation.weather;
        document.getElementById('temp').innerHTML = cObj.current_observation.temp_f + " Farenheit"
    }
}

weatherForecast.open('GET', 'http://api.wunderground.com/api/b8272d3f8bd0120c/forecast/q/32789.json', true);
weatherForecast.responseType = 'text';
weatherForecast.send();

weatherForecast.onload = () => {
    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);

        document.getElementById('deic').innerHTML = fObj.forecast.txt_forecast.forecastday["0"].fcttext;
    }
}



