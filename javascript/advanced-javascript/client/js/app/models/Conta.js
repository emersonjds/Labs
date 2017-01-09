class Conta {

	constructor (titular, conta, saldo){
		this._titular = titular;
		this._conta = conta;
		this._saldo = 0.0;
	}

	deposita(valor) {
		this._valor += valor;
		return console.log('O valor depositado foi ' + valor);	
	}

	atualiza(taxa) {
		throw new Error('é necessario informar a taxa para atualização');
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