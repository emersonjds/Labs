package emersonjds.zoo.app;

import emersonjds.zoo.classes.Animal;
import emersonjds.zoo.classes.Cat;

public class Program {
	public static void main(String[] args) {
		Animal animal = new Cat("Toto", 2, "animal");
		animal.setSpecie("Cat");
		System.out.println("Ola seu animal eh " + animal.getSpecie() + " o nome do animal � " + animal.getNome()
				+ " e ele tem " + animal.getAge() + " anos");
		if (animal.isAdult()) {
			System.out.println("Animal adulto");
		} else {
			System.out.println("Animal nao eh adulto");
		}
		
		System.out.println("=================");
		System.out.println("O nome do animal eh " + animal.getNome());
		System.out.println("Barulho do animal");
		animal.soundEmmiter();
	
		System.out.println("**********************");
		animal.Die();
		animal.Die();
	}
}
