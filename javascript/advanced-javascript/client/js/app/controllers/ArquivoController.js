class ArquivoController {

	constructor() {
		this._inputDados = document.querySelector('.dados-arquivo');
	}

	envia() {
		let dados = new Arquivo(...this._inputDados.value.toUpperCase().split('/'));
	
		this._limpaFormulario();
		console.log(dados);
	}

	_limpaFormulario() {
		this._inputDados.value = '';
		this._inputDados.focus();
	}
}