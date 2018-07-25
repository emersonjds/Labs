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
		System.out.println(
			"Ola seu animal ï¿½ " + cachorro.getSpecie() + 
			" o nome do animal ï¿½ " + cachorro.getNome() + 
			" e ele tem " + cachorro.getAge() + " anos");
		if(cachorro.isAdult()) {
			System.out.println("Animal adulto");
		} else {
			System.out.println("Animal nao ï¿½ adulto");
		}
		
		System.out.println("O nome do gato é " + cat.getNome());
	}
}
