package emersonjds.zoo.app;

import emersonjds.zoo.classes.Animal;
import emersonjds.zoo.classes.Dog;

// import emersonjds.zoo.classes.*; import all packages of the package
// always use a unique import for itself data
public class Program {
	public static void main(String[] args) {
		Dog cachorro = new Dog("Toto", 2, "Cachorro");
		System.out.println(
			"Ola seu animal � " + cachorro.getSpecie() + 
			" o nome do animal � " + cachorro.getNome() + 
			" e ele tem " + cachorro.getAge() + " anos");
		if(cachorro.isAdult()) {
			System.out.println("Animal adulto");
		} else {
			System.out.println("Animal nao � adulto");
		}
	}
}
