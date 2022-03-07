import { PhotographerData } from "../utils/fetchData.js";
import {} from "../utils/FetchData.js";

const URL_Json = "./data/photographers.json";

// ---------------------------------------------
// PERMET DE RECUPERER LES DATA JSON SOUS FORME D'OBJET

async function getPhotographers() {
	// await me permet d'attendre que "FetchData.Js recupère le json"
	const photographers = await new PhotographerData(
		URL_Json
	).getPhotographersData();
	return {
		photographers: [...photographers],
	};
}

// ---------------------------------------------
// PERMET DE RECUPERER L'ID QUI SERVIRA A CREER LA PAGE PHOTOGRAPHE

function getIdLink(photographers) {
	const generalLink = document.getElementsByClassName("card__for-link");
	for (let i = 0; i < generalLink.length; i++) {
		generalLink[i].addEventListener("click", function (event) {
			event.preventDefault();
			const photographerID = generalLink[i].id; // récupère l'id rattaché à l'attribut selectionné
			console.log(photographerID);

			displayPhotographersData(photographers, photographerID); //init la fonction avec les deux argumentents qui sont le tableau et l'iD récuperer
			displayMedia(photographerID, photographers); // récupère les media du photographes et les affichents
		});
	}
}

// ---------------------------------------------
// PERMET DE RECUPERER LES DATA JSON MEDIA

async function displayMedia(photographerID, photographers) {
	const medias = await fetch(URL_Json)
		.then((response) => response.json())
		.then((response) => response.media)
		.catch((error) => console.log("La base de donnée n'existe pas", error));

	const mediaInfos = medias.filter(
		(element) => element.photographerId == photographerID
	);

	const getPhotographerName = photographers.find(
		(element) => element.id == photographerID
	);

	console.log(getPhotographerName.name);

	mediaInfos.forEach((mediaInfo) => {
		const pageMedia = ` 
				<div class="blocHaut-img">
					<img src="assets/SamplePhotos/${getPhotographerName.name}/${mediaInfo.image}">
				</div>
				<div class="blocBas-infos">
					<div class="blocBas-infos__titre">
						<p class="title">${mediaInfo.title}</p>
					</div>
					<div class="blocBas-infos__data">
						<p class="like">${mediaInfo.likes}</p>
						<p class="like">OuO</p>
					</div>
				</div>
		`;
		const article = document.createElement("article");
		article.setAttribute("class", "container");
		article.innerHTML = pageMedia;
		document.querySelector(".photographer_section1").appendChild(article);
	});
}

// ---------------------------------------------
// SERT A AFFICHER LA PAGE PHOTOGRAPHER

function displayPhotographersData(photographers, photographerID) {
	// cherche le premier element qui concorde avec l'argument "photographerID" etnous renvoi tout son contenu
	const photograperInfo = photographers.find(
		(element) => element.id == photographerID
	);
	console.table(photograperInfo);

	const pagePhotographer = ` 
			<div class="photograph-header">
				<div class="photograph-header__infos">
					<div class="photograph-header__infos-left">
						<h2>${photograperInfo.name}</h2>
						<p class="ville">${photograperInfo.city}, ${photograperInfo.country}</p>
						<p class="tag">${photograperInfo.tagline}</p>
					</div>
					<button class="contact_button" onclick="displayModal()">
						Contactez-moi
					</button>
				</div>
				<img src="assets/SamplePhotos/Photographers_ID_Photos/${photograperInfo.portrait}">
			</div>

			<section class="filter">
				<p>Trier par</p>
				<div class="custom-select">
  					<select>
    					<option class="test" value="0">Popularité</option>
    					<option value="1">Date</option>
    					<option value="2">Titre</option>
  					</select>
				</div>
			</section>`;

	document.querySelector(".photographer_section").innerHTML = pagePhotographer;
}

// ---------------------------------------------
// PERMET D'INIT LES FONCTIONS

async function init() {
	const { photographers } = await getPhotographers();
	getIdLink(photographers);
}

init();
