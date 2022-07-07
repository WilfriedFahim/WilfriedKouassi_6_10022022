//FetchData me permet de récuperer et traiter le fichier json, grace à la fonction fetch qui traite la promise

export class FetchData {
	constructor(url) {
		this._url = url;
	}

	async get() {
		return fetch(this._url)
			.then((response) => response.json())
			.then((response) => response.photographers)
			.catch((error) => console.log("La base de donnée n'existe pas", error));
	}
}

export class PhotographerData extends FetchData {
	constructor(url) {
		super(url); //"super" permet de récuperer les propriétés de la classe emprunté
	}

	async getPhotographersData() {
		return await this.get();
	}
}
