package br.com.calculator.classes;

/**
 * Adition
 */
public class Adition extends  Calc {

    public Adition(int numberOne, int numberTwo) {
        super(numberOne, numberTwo);
    }

    @Override
    protected int doCalc() {
        return numberOne + numberTwo;
    }
}