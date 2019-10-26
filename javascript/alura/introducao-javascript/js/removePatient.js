var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", event => {
  // target = event.target;
  // fatherNode = target.parentNode;
  // fatherNode.remove();
  event.target.parentNode.classList.add(".fadeOut");
  setTimeout(() => {
    event.target.parentNode.remove();
  }, 500);
});

// pacientes.forEach(paciente => {
//   paciente.addEventListener("dblclick", () => {
//     console.log("fui clicado com um duplo click");
//     this.remove();
//   });
// });
