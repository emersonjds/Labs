window.onload = () => {
  var ajax = new XMLHttpRequest()

  ajax.open('GET', "./hospitality-json/json4a/data.json", true);
  ajax.responseType = 'text';

  ajax.send();

  ajax.onload = () => {
    if (ajax.status === 200) {
      var data = JSON.parse(ajax.responseText);

      for (var i = 0; i < data.length; i++) {
        var x = i + 1;

        document.getElementById("livro").innerHTML = data[x].livro + "<br>"
        console.log(data[i])
        
      }

    }
  }
}
