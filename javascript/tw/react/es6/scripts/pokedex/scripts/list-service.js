var ListService = {
	createList: function(pkmList){
		return pkmList.map(function(pokemon){
			return '<li class="poke-list-item" >'+
						'<img src="//serebii.net/pokedex-xy/icon/'+pokemon.number+'.png" />'+
						'<span>'+pokemon.number+' - '+pokemon.name+'</span>'+
					'</li>';
		}).join('')
	}
}
