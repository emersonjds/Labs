axios.get('https://api.github.com/users/emersonjds')
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })