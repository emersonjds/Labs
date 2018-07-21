package emersonjds.zoo.classes;

public class Animal {

    private String name;
    private String specie;
    private int idade;
    
    // access modifier / type of return / mehotd name 
    public String getNome () {
    	return this.name;
    }
    
    public void setName (String name) {
    	this.name = name;
    }
}
