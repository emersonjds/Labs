function checkAge(age) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      return age = 17 ? resolve() : reject();
    }, 2000);
  })
}

checkAge(20).then(() => {
  console.log('maior que 18')
}).catch(() => {
  console.log('menor que 18')
});