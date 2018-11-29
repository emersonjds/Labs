var minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https:/api.github.com/users/emersonjds');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject('Erro na requisição');
        }
      }
    }
  });
}

minhaPromise()
  .then(function(res) {
    console.log(res)
  })
  .catch(function(error) {
    console.warn('Erro na requisição', error)
  });