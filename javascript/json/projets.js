window.onload = () => {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', './hospitality-json/names.json', true);
  xhr.responseType = 'text'

  xhr.onload = () => {
    if (xhr.status === 200) {
      var dados = JSON.parse(xhr.responseText)
      dados.map(data => {
        console.log(data.firstName)
      })
    }
  }

  xhr.send()

  
}

