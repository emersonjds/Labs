// Quando trabalhamos com funções assíncronas, temos que passar uma função que seja executada quando a anterior for finalizada. Essa função chamada ao final da ação assíncrona é chamada de “callback”. Qual o problema com o callback comum?

// Acontece que quando temos muitas ações que devem seguir uma ordem, acabamos passando callback para callback em outro callback, etc. Por causa da indentação, isso causa o chamado “Callback Hell”, o que estraga muito a legibilidade do código:

//Calback Hell Example
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
// Note a parte inferior. Ela acaba tendo que fechar as funções, um espaço que não nos dá valor nenhum de significado. Caso a gente precise passar alguma função após a chamada do callback, esse comando ficaria junto ao fechamento das funções, o que tornaria difícil sabermos de onde ela pertence.