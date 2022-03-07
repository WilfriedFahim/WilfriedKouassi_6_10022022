function photographerFactory(data) {
	const { name, id, city, country, tagline, price, portrait } = data;

	const picture = `assets/SamplePhotos/Photographers_ID_Photos/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");
		const a = document.createElement("a"); // creer le lien <a>

		a.href = `./photographer.html`; // ajoute le chemin a la const qui contient le lien
		article.appendChild(a); // ajoute la const a l'article
		a.setAttribute("class", "card__for-link"); // ajoute l'id à chaque card
		a.setAttribute("id", id);
		const img = document.createElement("img");
		img.setAttribute("src", picture);

		const h2 = document.createElement("h2");
		h2.textContent = name;

		a.appendChild(img); // ajoute l'image dans la const link qui contient le lien <a>
		a.appendChild(h2);

		//const ville = document.createElement("ville");
		const ville = document.createElement("p");
		ville.textContent = city + ", " + country;
		article.appendChild(ville);

		const tag = document.createElement("p");
		tag.className = "tag";
		tag.textContent = tagline;
		article.appendChild(tag);

		const prix = document.createElement("p");
		prix.className = "prix";
		prix.textContent = price + "€/jour";
		article.appendChild(prix);

		return article;
	}

	return {
		name,
		id,
		city,
		country,
		tagline,
		price,
		portrait,
		getUserCardDOM,
	};
}
