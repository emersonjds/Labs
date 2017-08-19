const animal = [
  {type: 'cat', name: 'Flufky'},
  {type: 'dog', name: 'Flufy'}
]

animal.filter((item) => {
  return animal.type === 'cat'
})
