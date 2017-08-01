var myReq = new XMLHttpRequest()

myReq.open('GET', './data.json', true); //verbo/ destino/ async or not

myReq.onload = () => {
  var data = JSON.parse(myReq.responseText)
  console.log(data)
}

myReq.send();