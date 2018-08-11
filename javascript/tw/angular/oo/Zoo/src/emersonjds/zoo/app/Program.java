package emersonjds.zoo.app;

import emersonjds.zoo.classes.Animal;
import emersonjds.zoo.classes.Cat;
import emersonjds.zoo.classes.Zoologico;

public class Program {
	public static void main(String[] args) {
		// abstract class
		Animal animal = new Cat("Toto", 2, "animal");
		// concrete class
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

		Zoologico zoo = new Zoologico();
		zoo.setName("zoo Curso OO");
		zoo.addAnimal(animal);
		System.out.println("Animais do zoologico " + zoo.getName());
		zoo.listAnimal();
	}
}
