//FetchMedia me permet de récuperer et traiter le fichier json, grace à la fonction fetch qui traite la promise

export class FetchMedia {
	constructor(url) {
		this._url = url;
	}

	async get() {
		return fetch(this._url)
			.then((response) => response.json())
			.then((response) => response.media)
			.catch((error) => console.log("La base de donnée n'existe pas", error));
	}
}

export class MediaData extends FetchMedia {
	constructor(url) {
		super(url); //"super" permet de récuperer les propriétés de la classe emprunté
	}

	async getMediaData() {
		return await this.get();
	}
}
