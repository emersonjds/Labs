class Conta {

	constructor (titular, conta){
		this._titular = titular;
		this._conta = conta;
		this._saldo = 0.0;
	}

	deposita(valor) {
		this._valor += valor;
		return console.log('O valor depositado foi ' + valor);
		
	}

	get conta() {
		return this._conta;
	}

	get saldo() {
		return this._saldo;
	}

	get titular() {
		return this._titular;
	}
}