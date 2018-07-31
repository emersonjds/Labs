package emersonjds.zoo.classes;

import emersonjds.zoo.interfaces.Liver;

public abstract class Animal implements Liver {

  private String name;
  private String species;
  protected int age;
  protected boolean isLive;

  // access modifier / type of return / method name
  public String getNome() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSpecie() {
    return this.species;
  }

  public void setSpecie(String species) {
    this.species = species;
  }

  public int getAge() {
    return this.age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  // (if Dog.isLive())
  public boolean isLive() {
    return isLive;
  }

  // over default constructor
  // method assign = name of method + params type and amount of params
  public Animal(String name, int age, String species) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.isLive = true;
  }

  // method overload
  public Animal(String name) {
    this.name = name;
    this.isLive = true;
  }

  // abstract method
  @Override // override to Interface method
  public abstract void soundEmmiter();

  public Boolean isAdult() {
    if (this.isLive()) {
      return this.getAge() >= 1;
    } else {
      return false;
    }
  }

  @Override
  public final void Die() {
    this.isLive = false;
  }

}
