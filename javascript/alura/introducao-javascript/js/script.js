
console.log('documento carregado');

let titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Maximo Nutrição';
console.log('requisições de chamadas pre ordendas');

// let paciente = document.querySelector('#primeiro-paciente');
let pacientes = document.querySelectorAll('.paciente'); // retorna um array com o os dados passados como parametro

// titulo.addEventListener('click', mostraMensagem); // na chamada de função nao é preciso executar ela, assim que o evento é realizado ele auto executa a função

titulo.addEventListener('click', () => {
    console.log('Fui clicado')
})

// function mostraMensagem() {
//     console.log('Eu fui clicado');
// }

for (var i = 0; i <= pacientes.length; i++) {
    var paciente = pacientes[i];
    var pesoPaciente = paciente.querySelector('.info-peso');
    var peso = pesoPaciente.textContent;

    var alturaPaciente = paciente.querySelector('.info-altura');
    var altura = alturaPaciente.textContent;

    var alturaValida = true;
    var pesoValido = true;

    var infoIMC = document.querySelector('.info-imc');

    if (peso <= 0 || peso >= 1000) {
        console.log('peso invalido');
        pesoValido = false;
        infoIMC.textContent = 'Peso Invalido';
        paciente.classList.add('paciente-invalido');
        // paciente.style.color = red; // muda a cor da fonte para ficar em vermelho caso atenda a condição
        // paciente.style.backgroundColor = lightcoral; // muda a cor de fundo da linha
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log('altura invalida');
        alturaValida = false;
        infoIMC.textContent = 'Altura Invalida';
        // paciente.style.backgroundColor = lightcoral;
        paciente.classList.add('paciente-invalido');
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        infoIMC.textContent = imc.toFixed(2); // arredonda as casas decimais para 2 digitos 
    }
}

var botaoAdicionar = document.querySelector('#adicionar-paciente'); // chamar sempre com chamada de classe ou id
botaoAdicionar.addEventListener('click', () => {
    console.log('To bombando carai')
})