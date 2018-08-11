package br.com.calculator.classes;

/**
 * Subtraction
 */
public class Subtraction extends Calc{

    public Subtraction( int numberOne, int numberTwo) {
        super(numberOne, numberTwo);
    }
    
    @Override
    protected int doCalc() {
        return numberOne - numberTwo;
    }
}