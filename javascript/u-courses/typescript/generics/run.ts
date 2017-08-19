import { Cavalo } from './../classes/cavalo';
import { Animal } from './../classes/animal';
import { Dao } from './dao';

let dao: Dao<Animal> = new Dao<Animal>();

let animal: Animal = new Animal('Rex');
let cavalo: Animal = new Cavalo('Pocoto');

dao.insert(cavalo)
