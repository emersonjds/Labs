package emersonjds.zoo.app;

import emersonjds.zoo.classes.Cat;
import emersonjds.zoo.classes.Dog;

public class Program {
    public static void main(String[] args) {
        Dog cachorro = new Dog("Toto", 2, "Cachorro");
        Cat cat = new Cat("Bob", 12, "gato");
        System.out.println("Ola seu animal é " + cachorro.getSpecie() +  " o nome do animal é " + cachorro.getNome() +
                 " e ele tem " + cachorro.getAge() + " anos");
        if (cachorro.isAdult()) {
            System.out.println("Animal adulto");
        } else {
            System.out.println("Animal nao � adulto");
        }

        System.out.println("O nome do gato é " + cat.getNome());

        System.out.println("=================");
        System.out.println("Barulho do cachorro");
        System.out.println("=================");
        System.out.println("Barulho do gato");
    }
}
