function photographerFactory(data) {
	const { name, city, country, tagline, price, portrait } = data;

	const picture = `assets/SamplePhotos/Photographers_ID_Photos/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");
		const link = document.createElement("a"); // creer le lien <a>

		link.href = "photographer.html"; // ajoute le chemin a la const qui contient le lien
		article.appendChild(link); // ajoute la const a l'article
		console.log(link);

		const img = document.createElement("img");
		img.setAttribute("src", picture);

		const h2 = document.createElement("h2");
		h2.textContent = name;

		link.appendChild(img); // ajoute l'image dans la const link qui contient le lien <a>
		console.log(article);
		article.appendChild(h2);

		//const ville = document.createElement("ville");
		const ville = document.createElement("p");
		ville.className = "ville"; // ajoute une class
		ville.textContent = city + ", " + country;
		article.appendChild(ville);
		console.log(ville);

		const tag = document.createElement("p");
		tag.className = "tag";
		tag.textContent = tagline;
		article.appendChild(tag);
		console.log(tag);

		const prix = document.createElement("p");
		prix.className = "prix";
		prix.textContent = price + "€/jour";
		article.appendChild(prix);
		console.log(prix);

		return article;
	}

	return { name, city, tagline, price, portrait, getUserCardDOM };
}
