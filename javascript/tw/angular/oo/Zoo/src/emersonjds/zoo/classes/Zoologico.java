package emersonjds.zoo.classes;

import java.util.ArrayList;
import java.util.List;

/**
 * Zoologico
 */
public class Zoologico {
  // composition class, a zoo is compost of a list of the animals
  private String name;
  private List<Animal> animais;
  private String types;

  public Zoologico() {
    // when the class is initialize a new ArrayList of the Animal is create
    animais = new ArrayList<Animal>();
  }

  /**
   * @return the name
   */
  public String getName() {
    return name;
  }

  /**
   * @param name the name to set
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * @param animal the animal to add
   */
  public void addAnimal(Animal animal) {
    this.animais.add(animal);
  }

  /**
   * @param index the index of animal to remove
   */
  public void removeAnimal(int indexAnimal) {
    this.animais.remove(indexAnimal);
  }

  public void listAnimal() {
    System.out.println("Lista de animais do zoologico");
    // size is equal to lenght
    for (int i = 0; i < animais.size(); i++) {
      System.out.println(" - " + animais.get(i).getNome());
    }
  }
}