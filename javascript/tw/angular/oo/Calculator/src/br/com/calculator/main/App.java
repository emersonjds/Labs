package br.com.calculator.main;

import br.com.calculator.factory.CalcFactory;
import br.com.calculator.interfaces.MathCalculator;

public class App {

	public static void main(String[] args) {
		String calculo = "/";
		int numberOne = 2;
		int numberTwo = 2;
		
		CalcFactory factory = new CalcFactory();
		MathCalculator calculator = factory.createCalc(numberOne, numberTwo, calculo);
		
		if(calculator != null) {
			System.out.println(calculator.calc());
		} else {
			System.out.println("Calculo invalido");
		}
	}

}
