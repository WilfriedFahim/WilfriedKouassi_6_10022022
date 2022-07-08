//Cette fonction me permet de créer tout la base d'affichage pour toutes les bannières photographes qui seront générés

function bannerPhotographerFactory(data) {
	const { name, id, city, country, tagline, price, portrait } = data;
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
		document.querySelector(".namePhotographer").textContent = name;

		//* ______<p class="ville">
		const ville = document.createElement("p");
		ville.setAttribute("class", "ville");
		ville.textContent = city + ", " + country;
		photographerHeader_infosLeft.appendChild(ville);

		//* ______<p class="tag">
		const tag = document.createElement("p");
		tag.setAttribute("class", "tag");
		tag.textContent = tagline;
		photographerHeader_infosLeft.appendChild(tag);

		//* ____<button class="contact_button"">
		const button = document.createElement("button");
		button.setAttribute("class", "contact_me");
		button.textContent = "Contactez-moi";
		button.setAttribute("aria-label", "Contact Me");
		photographerHeader_infos.appendChild(button);

		//* ____<img src="assets/SamplePhotos....
		const img = document.createElement("img");
		img.setAttribute("src", picture);
		img.setAttribute("alt", portrait);
		photographerHeader.appendChild(img);

		//* ____bouton contactez-moi
		button.onclick = function () {
			document.getElementById("contact_modal").style.display = "block";
		};

		//* ------------------------------------------------------

		//* <div class="filter">
		const filter = document.createElement("div");
		filter.setAttribute("class", "filter");

		//* __<p>
		const trie = document.createElement("label");
		trie.textContent = "Trier par";
		filter.appendChild(trie);

		//* __<div class="custom-select">
		const customSelect = document.createElement("div");
		customSelect.setAttribute("class", "custom-select");
		filter.appendChild(customSelect);

		//* ____<div class="custom-select">
		const select = document.createElement("select");
		select.setAttribute("aria-label", "Order By");
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

	//* Création de la Box du bas (likes)
	const BoxBelow = document.createElement("div");
	BoxBelow.setAttribute("class", "boxBelow");

	const nbrDeLikeAndHeart = document.createElement("div");
	nbrDeLikeAndHeart.setAttribute("class", "nbrDeLikeAndHeart");

	const pricePerDay = document.createElement("div");
	pricePerDay.setAttribute("class", "pricePerDay");

	const main = document.querySelector("#main");
	main.appendChild(BoxBelow);

	// _____ Le nombre de like + le coeur
	const likeAll = document.createElement("p");
	likeAll.setAttribute("id", "likeAll");
	nbrDeLikeAndHeart.appendChild(likeAll);

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	svg.setAttribute("viewBox", "0 0 512 512");
	svg.setAttribute("class", "like");
	path1.setAttribute(
		"d",
		"M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
	);
	svg.appendChild(path1);
	nbrDeLikeAndHeart.appendChild(svg);
	BoxBelow.appendChild(nbrDeLikeAndHeart);

	// _____ Le prix par jours
	const prix = document.createElement("p");
	prix.className = "prix";
	prix.textContent = price + "€ / jour";
	pricePerDay.appendChild(prix);
	BoxBelow.appendChild(pricePerDay);

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
