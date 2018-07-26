package emersonjds.zoo.app;

import emersonjds.zoo.classes.Animal;
import emersonjds.zoo.classes.Cat;
import emersonjds.zoo.classes.Dog;

// import emersonjds.zoo.classes.*; import all packages of the package
// always use a unique import for itself data
public class Program {
	public static void main(String[] args) {
		Dog cachorro = new Dog("Toto", 2, "Cachorro");
		Cat cat = new Cat("Bob", 12, "gato");
		System.out.println("Ola seu animal eh " + cachorro.getSpecie() + " o nome do animal � " + cachorro.getNome()
				+ " e ele tem " + cachorro.getAge() + " anos");
		if (cachorro.isAdult()) {
			System.out.println("Animal adulto");
		} else {
			System.out.println("Animal nao eh adulto");
		}

		System.out.println("O nome do gato eh " + cat.getNome());
		System.out.println("=================");
		System.out.println("Barulho do cachorro");
		cachorro.soudnEmmitter();
		System.out.println("=================");
		System.out.println("Barulho do gato");
		cat.soundEmmiter();
	}
}
