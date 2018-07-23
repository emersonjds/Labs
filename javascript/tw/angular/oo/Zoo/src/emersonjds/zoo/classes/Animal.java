package emersonjds.zoo.classes;

public class Animal {
	
	

    private String name;
    private String species;
    private int age;
    
    // access modifier / type of return / method name 
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
    
    //over default constructor
    public Animal(String name, int age, String species) {
    	this.name = name;
    	this.age = age;
    	this.species = species;
    }
    
    public void soundEmmiter() {
    	System.out.println(this.getNome() + "emitiu um barulho");
    }

    public Boolean isAdult() {
      return this.getAge() >= 1;
    }


}
