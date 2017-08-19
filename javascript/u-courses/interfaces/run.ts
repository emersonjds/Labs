import { Animal } from './../classes/animal';
import { AnimalDao } from './animalDao';
import { DaoInterface } from './dao.interface';

let dao : DaoInterface = new AnimalDao();

let animal: Animal = new Animal('Rex');


dao.insert(animal);