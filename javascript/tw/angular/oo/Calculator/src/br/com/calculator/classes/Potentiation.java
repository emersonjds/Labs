package br.com.calculator.classes;

import br.com.calculator.interfaces.MathCalculator;

public class Potentiation extends Calc {

	public Potentiation( int numberOne, int numberTwo) {
        super(numberOne, numberTwo);
	}
	
	@Override
	protected int doCalc() {
		// method for potential
        return (int) Math.pow(numberOne, numberTwo);
    }
}
	

