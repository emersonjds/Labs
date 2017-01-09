class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document); //a estrutura bind mantem a associação do query
        											   // Selector com o documento
        this._data = $('#data');
		this._quantidade = $('#quantidade');
		this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
	}

    adiciona(event) {

        event.preventDefault();
		this._listaNegociacoes.adiciona(this._criaNegociacao());

		//nova mensagem e atualizando a view
		this._mensagem.texto = 'Negociação adicionada com sucesso';
		this._mensagemView.update(this._mensagem);

		this._negociacoesView.update(this._listaNegociacoes);
		this._limpaFormulario();
    }

	_criaNegociacao() {
		
		return new Negociacao(
        	DateHelper.textToDate(this._data.value),
        	this._quantidade.value,
			this._valor.value)
	}

	_limpaFormulario() { //o underline informa ao metodo que ele so pode ser utilizado na mesma classe
		this._data.value = '';
        this._data.focus();
        this._quantidade.value = 1;
        this._valor.value = 0.0
	}

}

