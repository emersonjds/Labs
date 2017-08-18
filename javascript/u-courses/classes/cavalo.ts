import { Animal } from './animal';

export class Cavalo extends Animal {

  constructor(nome: string) { //overload call method
    super(nome)
  }

  public mover(distanciaEmMetros: number): void {
    console.log("Galopando ...")
    super.mover(distanciaEmMetros);
  }

}