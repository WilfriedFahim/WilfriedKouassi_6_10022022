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
		});
	}
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
    					<option value="0">Popularité</option>
    					<option value="1">Date</option>
    					<option value="2">Titre</option>
  					</select>
				</div>
			</section>
			`;

	const pagePhotographerSection = document.querySelector("#main");
	pagePhotographerSection.innerHTML = pagePhotographer;
}

// ---------------------------------------------
// PERMET D'INIT LES FONCTIONS

async function init() {
	const { photographers } = await getPhotographers();
	getIdLink(photographers);
}

init();
