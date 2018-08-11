package br.com.calculator.factory;

import br.com.calculator.classes.Adition;
import br.com.calculator.classes.Division;
import br.com.calculator.classes.Multiplication;
import br.com.calculator.classes.Subtraction;
import br.com.calculator.interfaces.MathCalculator;

public class CalcFactory {
	public MathCalculator createCalc(int numberOne, int numberTwo, String calc) {
		if(calc.equals("+")) {
			return new Adition(numberOne, numberTwo);
		} else if(calc.equals("-")) {
			return new Subtraction(numberOne, numberTwo);
		} else if(calc.equals("*")) {
			return new Multiplication(numberOne, numberTwo);
		} else if(calc.equals("/")) {
			return new Division(numberOne, numberTwo);
		} else {
			return null;
		}
	}
}
