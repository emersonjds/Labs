package br.com.calculator.classes;

import br.com.calculator.interfaces.MathCalculator;

public abstract class Calc implements MathCalculator {

	private int numberOne, numberTwo;

	public Calc(int numberOne, int numberTwo) {
		this.numberOne = numberOne;
		this.numberTwo = numberTwo;
	}

	@Override
	public Boolean validateOperation() {
		return numberOne >= 0 && numberTwo >= 0;
	}

	@Override
	public final int calc() {
		//template method pattern
		if (validateOperation()) {
			return doCalc();
		} else {
			return -1;
		}
	}

	//access in child classes
	protected abstract int doCalc();
	
}
