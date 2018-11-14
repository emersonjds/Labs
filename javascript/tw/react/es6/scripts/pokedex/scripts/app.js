import { PokeService } from './poke-service';
import { ListService } from './list-service';

let listFilter = '';
const listElement = document.querySelector('#pokeList');
const inputElement = document.querySelector('#pokeFilter');
const pokeballElement = document.querySelector('#pokeballBack');

inputElement.addEventListener('keyup', (event) =>  {
  listFilter = event.target.value;
  setList();
})

window.addEventListener('scroll', () => {
  var rotation = `translateY(-50%) rotateZ (${window.scrollY / 15})deg)`;
  pokeballElement.style.transform = rotation;
})

function setList() {
  PokeService.listAll()
  .then(filterLlist)
  .then(ListService.createList)
  .then(template => listElement.innerHTML = template;
}

function filterLlist(pkmList) {
  return pkmList.filter(pkm => pkm.name.includes(listFilter.toLocaleLowerCase));
}

setList();