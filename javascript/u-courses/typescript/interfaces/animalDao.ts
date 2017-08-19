import { Animal } from './../classes/animal';
import { DaoInterface } from './dao.interface';

export class AnimalDao implements DaoInterface {

  tableName : string = '';

   insert(object: Animal) : boolean {
     console.log('inserido com sucesso'); //mock object
     object.mover(200);
     return true;
   }

   update(object: Animal) : boolean {
     return true;
   }

   delete(id: number): Animal {
     return null;
   }

   find(id: number) : Animal {
     return null;
   }

   findAll(): [Animal] {
     return [null];
   }
  
}