function bannerPhotographerFactory(data) {
	const { name, id, city, country, tagline, portrait } = data;
	const picture = `assets/SamplePhotos/Photographers_ID_Photos/${portrait}`;

	function getBannerPhotographer() {
		//* <div class="photograph-header">
		const photographerHeader = document.createElement("div");
		photographerHeader.setAttribute("class", "photograph-header");

		//* __<div class="photograph-header__infos">
		const photographerHeader_infos = document.createElement("div");
		photographerHeader_infos.setAttribute("class", "photograph-header__infos");
		photographerHeader.appendChild(photographerHeader_infos);

		//* ____<div class="photograph-header__infos-left">
		const photographerHeader_infosLeft = document.createElement("div");
		photographerHeader_infosLeft.setAttribute(
			"class",
			"photograph-header__infos-left"
		);
		photographerHeader_infos.appendChild(photographerHeader_infosLeft);

		//* ______<h2>
		const h2 = document.createElement("h2");
		h2.textContent = name;
		photographerHeader_infosLeft.appendChild(h2);

		//* ______<p class="ville">
		const ville = document.createElement("p");
		ville.setAttribute("class", "ville");
		ville.textContent = (city, country);
		photographerHeader_infosLeft.appendChild(ville);

		//* ______<p class="tag">
		const tag = document.createElement("p");
		tag.setAttribute("class", "tag");
		tag.textContent = tagline;
		photographerHeader_infosLeft.appendChild(tag);

		//* ____<button class="contact_button"">
		const button = document.createElement("button");
		button.setAttribute("class", "contact_button");
		button.textContent = "Contactez-moi";
		photographerHeader_infos.appendChild(button);

		//* ____<img src="assets/SamplePhotos....
		const img = document.createElement("img");
		img.setAttribute("src", picture);
		photographerHeader.appendChild(img);

		//* ------------------------------------------------------

		//* <div class="filter">
		const filter = document.createElement("div");
		filter.setAttribute("class", "filter");

		//* __<p>
		const trie = document.createElement("p");
		trie.textContent = " Trier par";
		filter.appendChild(trie);

		//* __<div class="custom-select">
		const customSelect = document.createElement("div");
		customSelect.setAttribute("class", "custom-select");
		filter.appendChild(customSelect);

		//* ____<div class="custom-select">
		const select = document.createElement("select");
		customSelect.appendChild(select);

		//* ______<option>
		const value0 = document.createElement("option");
		value0.setAttribute("class", "ancrage");
		value0.setAttribute("value", "0");
		value0.textContent = "Popularité";
		select.appendChild(value0);

		const value1 = document.createElement("option");
		value1.setAttribute("value", "1");
		value1.textContent = "Date";
		select.appendChild(value1);

		const value2 = document.createElement("option");
		value2.setAttribute("value", "2");
		value2.textContent = "Titre";
		select.appendChild(value2);

		const headerSection = document.querySelector(".section_header");
		headerSection.appendChild(photographerHeader);
		headerSection.appendChild(filter);

		return photographerHeader, filter;
	}

	return {
		name,
		id,
		city,
		country,
		tagline,
		portrait,
		getBannerPhotographer,
	};
}
