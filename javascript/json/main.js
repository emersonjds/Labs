var start = '{ "favColor": "Orange", "favSeason": "Fall" }';

var data = JSON.parse(start) //convert to Object
console.log(data)

var string = JSON.stringify(data) //Convert to string
console.log(string)

data = '{ "name": "Emerson", "age": "27", "city": "Sao Paulo"} ';

var personalInformation = JSON.parse(data)
console.log(personalInformation)

