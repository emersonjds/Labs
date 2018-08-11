package br.com.calculator.classes;

/**
 * Division
 */
public class Division extends Calc{

    public Division( int numberOne, int numberTwo ) {
        super(numberOne, numberTwo);
    }

    @Override
    public Boolean validateOperation() {
        return numberOne >= 0 && numberTwo > 0 ;
    }

    @Override
    protected int doCalc() {
       return numberOne / numberTwo;
    }
}