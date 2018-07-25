package emersonjds.zoo.classes;

public class Dog extends Animal {

	public Dog (String name, int age, String species) {
		super(name, age, species);
	}
	
	public Dog (String name) {
		super(name);
	}
	
	public Dog (String name, int age) {
		super(name, age, "Rex");
	}

	public void soudnEmmitter() {
		System.out.println("Latido do cachorro");
	}
	
}
