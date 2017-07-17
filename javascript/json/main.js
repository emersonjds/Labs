var start = '{ "favColor": "Orange", "favSeason": "Fall" }';

var data = JSON.parse(start) //convert to Object
console.log(data)

var string = JSON.stringify(data) //Convert to string
console.log(string)