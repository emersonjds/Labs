function request(url, callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			callback(response);
		}
	}
	xmlhttp.open('GET', url, true);
	xmlhttp.send();
}

var PokeService = {
	// url: '//pokeapi.co/api/v1'
	url: '//dev.treinaweb.com.br/pokeapi',
	list: [],
	listAll: function (callback) {
		if (this.list.length) {
			return callback()
		} else {
			var that = this;
			request(this.url + 'pokedex/1', function (response) {
				var pkmList = response.pokemon;
				pkmList = pkmList.map(function (pokemon) {
					var number = that.getNumberFromURL(pokemon.resource_uri);
					pokemon.number = number;
				})
			})
		}
	},
	getNumberFromURL: function (url) {
		return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
	}
}