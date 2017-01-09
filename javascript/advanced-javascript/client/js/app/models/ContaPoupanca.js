class ContaPoupanca extends Conta {

    constructor (titular, conta, saldo){
		super(titular),
		super(conta),
		super(saldo)
	}

	atualiza(taxa) {
		this._saldo = this._saldo + taxa * 2;
	}
}