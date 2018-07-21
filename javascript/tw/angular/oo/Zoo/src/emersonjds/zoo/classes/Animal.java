package emersonjds.zoo.classes;

public class Animal {

    private String name;
    private String species;
    private int age;
    
    // access modifier / type of return / mehotd name 
    public String getNome () {
    	return this.name;
    }
    
    public void setName (String name) {
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
}
