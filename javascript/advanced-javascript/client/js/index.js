var dados = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	var tr = document.createElement('tr'); //criando um elemnto novo em js puro
	
	dados.forEach(function(campo) {
		var td = document.createElement('td');
		
		td.textContent = campo.value; //inserindo dados retornados do forEach num elemento criado dinamicamente

		tr.appendChild(td); //adicionando nova linha no tr
	});

	var tdVolume = document.createElement('td');
	tdVolume.textContent = dados[1].value * dados[2].value; // criando campo de conta de volume

	tr.appendChild(tdVolume);

	tbody.appendChild(tr); //inserindo a nova linha criada dinamicamente 
	dados[0] = "";
	dados[1] = 1;
	dados[2] = "";
	dados[0].focus;
});



