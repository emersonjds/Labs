package br.com.calculator.classes;

/**
 * Multiplication
 */
public class Multiplication extends Calc{
    Multiplication( int numberOne, int numberTwo) {
        super(numberOne, numberTwo);
    }

    protected int doCalc() {
        return numberOne * numberTwo;
    }
    
}