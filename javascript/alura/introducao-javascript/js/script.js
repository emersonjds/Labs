
console.log('documento carregado');

let titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Maximo Nutrição';
console.log('requisições de chamadas pre ordendas');

// let paciente = document.querySelector('#primeiro-paciente');
let pacientes = document.querySelectorAll('.paciente'); // retorna um array com o os dados passados como parametro

for (var i = 0; i <= pacientes.length; i++) {
    let paciente = paciente[i];
    let pesoPaciente = paciente.querySelector('.info-peso');
    let peso = pesoPaciente.textContent;

    let alturaPaciente = paciente.querySelector('.info-altura');
    let altura = alturaPaciente.textContent;

    let alturaValida = true;
    let pesoValido = true;

    let infoIMC = document.querySelector('.info-imc');

    if (peso <= 0 || peso >= 1000) {
        console.log('peso invalido');
        pesoValido = false;
        infoIMC.textContent = 'Peso Invalido';
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log('altura invalida');
        alturaValida = false;
        infoIMC.textContent = 'Altura Invalida';
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        infoIMC.textContent = imc.toFixed(2); // arredonda as casas decimais para 2 digitos 
    }
}