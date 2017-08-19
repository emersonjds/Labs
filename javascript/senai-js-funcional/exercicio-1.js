//Dado que produtos estao em products.data.products

//Primeira Solução
products.data.products.filter(function(x) {
	return (x.quantity <= 100) 
		x.map(function(y) {
			y.sku;
		})
}) 

//Segunda Solução
products.data.products.filter((item) => {
  return item.quantity <= 100
}).map((itemFinal) => {
  return itemFinal.sku
})



