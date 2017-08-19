//REDUCE
[].reduce(function(init, current, index, array){

}) 

[1,2,3,4].reduce(function(p,c,i,a) {
  console.log(p,c,i,a)
  return false
})


[[1], [2], [3]].reduce(function(p,c) {
  return p.concat(c)
})

pr.reduce((p,c) => {
  if(c.quantity < 100) {
    console.log(p.concat(c.skull))
    return p.concat(c.sku)
  }
  return p;
},[])