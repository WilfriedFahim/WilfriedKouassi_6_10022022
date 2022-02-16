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

		const ville = document.createElement("ville");
		ville.textContent = city;
		console.log(ville);
		const tag = document.createElement("tag");
		tag.textContent = tagline;
		console.log(tag);
		const prix = document.createElement("prix");
		prix.textContent = price;
		console.log(prix);
		article.appendChild(ville);
		article.appendChild(tag);
		article.appendChild(prix);

		return article;
	}

	return { name, city, tagline, price, portrait, getUserCardDOM };
}
