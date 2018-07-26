package emersonjds.zoo.classes;

public abstract class Animal {
	
    private String name;
    private String species;
    private int age;
    private Boolean isLive;
    
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
    
    public Boolean isLive() {
    	return isLive;
    }
    
    //over default constructor
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
    
    //abstract method 
    public abstract void soundEmmiter();

    public Boolean isAdult() {
      return this.getAge() >= 1;
    }
    
    public void Die() {
    	this.isLive = false;
    }


}
