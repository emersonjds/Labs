class Negociacao {

	constructor() {
		this._data = new Date();
		this._quantidade = 1;
		this._valor = 0.0;
		// Object.freeze(this); //a estancia ja é criada sem sofrer mais modificação
	}

	//._ esta propriedade permite permutar o atributo para o modo privado sendo acessdo apenas por metodos

	get volume() {
		//desta forma o atributo so pode ser acessado pela propria classe
		return this._quantidade * this._valor;
	}

	get data() {
		return new Date(this._data.getTime());
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}
}