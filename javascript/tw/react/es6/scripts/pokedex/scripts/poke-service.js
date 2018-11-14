export const PokeService = {
	get url() {
		return '//pokeapi.co/api/v1'
		// url: '//dev.treinaweb.com.br/pokeapi',
	},
	list: [],
	listAll: function () {
		if (this.list.length) {
			return Promise.resolve(this.list)
		} else {
			return fetch(`${this.url}pokemon/1`)
				.then(response => response.json())
				.then(response => response.pokemon)
				.then(pkmList => {
					return pkmList.map(pokemon => {
						var number = that.getNumberFromURL(pokemon.resource_uri);
						return Object.assign({}, pokemon, { number })
					})
						.filter((pokemon) => (pokemon.number < 1000))
						.sort((a, b) => (a.number > b.number ? 1 : -1))
						.map((pokemon) => {
							pokemon.number = ('000' + pokemon.number).slice(-3);
							return Object.assign({}, pokemon, { number })
						})
				})
				.then(list => {
					this.list = list;
					return list;
				})
		}
	},
	getNumberFromURL: function (url) {
		return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
	}
}