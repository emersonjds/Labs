package emersonjds.zoo.classes;

import java.util.List;
import java.util.ArrayList;

public class Vet {
	private String name;
	private List<Animal> animais;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Vet() {
		animais = new ArrayList<Animal>();
	}
	
	public void animalAttend(Animal animal) {
		animais.add(animal);
	}
	
	public void stopAttendAnimal(int indexAnimal) {
		animais.remove(indexAnimal);
	}
	
	public void listAttendAnimals() {
		System.out.println("Animais atendidos");
		for(int i = 0 ; i < animais.size(); i ++ ) {
			System.out.println(" - Animal atendido" + animais.get(i).getNome());
		}
	}
}
