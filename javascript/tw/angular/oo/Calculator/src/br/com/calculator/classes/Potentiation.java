package br.com.calculator.classes;

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
	

