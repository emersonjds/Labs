package emersonjds.zoo.classes;

public class Animal {

    private String name;
    private String specie;
    private int age;
    
    // access modifier / type of return / mehotd name 
    public String getNome () {
    	return this.name;
    }
    
    public void setName (String name) {
    	this.name = name;
    }

    public String getSpecie() {
      return this.specie;
    }

    public void setSpecie(String specie) {
      this.specie = specie;
    }

    public int getAge() {
      return this.age;
    }

    public void setAge(int age) {
      this.age = age;
    }
}
