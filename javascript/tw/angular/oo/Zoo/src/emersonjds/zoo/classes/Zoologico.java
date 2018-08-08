package emersonjds.zoo.classes;

import java.util.List;

/**
 * Zoologico
 */
public class Zoologico {
    // composition class, a zoo is compost of a list of the animals

    private String name;
    private List<Animal> animais;

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
}