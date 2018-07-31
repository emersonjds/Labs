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

	@Override
	public void soundEmmiter() {
		if(isLive) {
			System.out.println("Au Au");
		} else {
			System.out.println("The animal is died");
		}
	}
	
	@Override
	public boolean isAdult () {
		if(isLive) {
			return age > 2;
		} else {
			return false;
		}
		
	}
}
