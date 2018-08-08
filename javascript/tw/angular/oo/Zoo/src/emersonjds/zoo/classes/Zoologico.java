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
   * @param animal the animal to set
   */
  public void addAnimal(Animal animal) {
    this.animais.add(animal);
  }

  /**
   * @param index the index to set
   */
  public void removeAnimal(int indexAnimal) {
    this.animais.remove(indexAnimal);
  }
}