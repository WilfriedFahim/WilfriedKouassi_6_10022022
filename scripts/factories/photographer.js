function photographerFactory(data) {
	const { name, city, tagline, price, portrait } = data;

	const picture = `assets/SamplePhotos/Photographers_ID_Photos/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");
		console.log(article);
		const img = document.createElement("img");
		img.setAttribute("src", picture);
		const h2 = document.createElement("h2");
		h2.textContent = name;
		console.log(h2);
		article.appendChild(img);
		article.appendChild(h2);

		//const ville = document.createElement("ville");
		const ville = document.createElement("p");
		ville.className = "ville";
		ville.textContent = city;
		console.log(ville);
		article.appendChild(ville);

		const tag = document.createElement("p");
		tag.className = "tag";
		tag.textContent = tagline;
		console.log(tag);
		article.appendChild(tag);

		const prix = document.createElement("p");
		prix.className = "prix";
		prix.textContent = price + "€/jours";
		console.log(prix);
		article.appendChild(prix);

		return article;
	}

	return { name, city, tagline, price, portrait, getUserCardDOM };
}
