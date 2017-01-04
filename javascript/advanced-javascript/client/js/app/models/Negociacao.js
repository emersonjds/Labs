class Negociacao {

	constructor() {
		this._data = new Date();
		this._quantidade = 1;
		this._valor = 0.0;
	}

	//._ esta propriedade permite permutar o atributo para o modo privado sendo acessdo apenas por metodos

	get volume() {
		//desta forma o atributo so pode ser acessado pela propria classe
		return this._quantidade * this._valor;
	}

	get data() {
		return this._data;
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}
}