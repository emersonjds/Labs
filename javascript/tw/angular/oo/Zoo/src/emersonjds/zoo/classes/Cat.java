package emersonjds.zoo.classes;

public class Cat extends Animal {
	public Cat(String name, int age, String species ) {
		super(name, age , species);
	}
	
	public Cat(String name) {
		super(name, 12, "gato");
	}
	//pass parameter for complements anothers fields that don�t declared on function scope 

	@Override
	public void soundEmmiter() {
		if(isLive) {
			System.out.println("Miau");
		} else {
			System.out.println("The animal is died");
		}
		
	}
}
