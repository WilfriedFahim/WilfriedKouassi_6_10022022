import { MediaData } from "../pages/fetchMedia.js";
import {} from "../pages/fetchMedia.js";

import { PhotographerData } from "../pages/fetchData.js";
import {} from "../pages/FetchData.js";

const URL_Data_Json = "./data/photographers.json";

//* ---------------------------------------------
//*  PERMET DE RECUPERER LES DATA JSON MEDIA + PHOTOGRAPHER

async function getMedia() {
	const media = await new MediaData(URL_Data_Json).getMediaData();
	return {
		media: [...media],
	};
}

async function getPhotographers() {
	// await me permet d'attendre que "FetchData.Js recupère le json"
	const photographers = await new PhotographerData(
		URL_Data_Json
	).getPhotographersData();
	return {
		photographers: [...photographers],
	};
}

//* ---------------------------------------------
//* PERMET DE RECUPERER L'ID QUI SERVIRA A CREER LA PAGE PHOTOGRAPHE

function iFiltMedia(media, photographers) {
	let params = new URL(document.location).searchParams;
	//La propriété en lecture seule searchParams de l'interface URL
	//retourne un objet URLSearchParams permettant d'accéder aux
	//arguments décodés de la requête GET contenue dans l'URL.

	const ids = params.get("id"); // récup le contenu du param "id" de l'URL

	const mediaInfos = media.filter(
		(element) => element.photographerId == ids // Me permet de recup l'objet du photographe
	); // rattacher à l'ID comparé

	const photographer = photographers.filter(
		(element) => element.id == ids // Me permet de recup  l'objet du photographe
	); // rattacher à l'ID comparé

	displayMedia(mediaInfos);
	displayBanner(photographer);
}

//* ---------------------------------------------
//* PERMET DE RECUPERER ET D'AFFICHER LA BANNIERE DU PHOTOGRAPHE

async function displayBanner(photographers) {
	const headerSection = document.querySelector(".section_header");
	console.log(headerSection);
	photographers.forEach((photographer) => {
		console.log(photographer); //! A SUPP
		const BannerModel = bannerPhotographerFactory(photographer); // ajoute chaque object à la fonction photographerFactory
		const BannerCard = BannerModel.getBannerPhotographer(); // utilise la fonction getUserCardDOM avec les infos passé en parametre
		headerSection.appendChild(BannerCard);
	});
}

//* ---------------------------------------------
//* PERMET DE RECUPERER ET D'AFFICHER LA PAGE DU PHOTOGRAPHE AVEC SES MEDIAS

async function displayMedia(mediaInfos) {
	const cardSection = document.querySelector(".photographer_media");
	mediaInfos.forEach((mediaInfo) => {
		const cardModel = mediaFactory(mediaInfo);
		const userCardMedia = cardModel.getUserCardMedia();
		cardSection.appendChild(userCardMedia);
	});
}

// ---------------------------------------------
// SERT A TRIER LES MEDIAS

function trieSelectif(media) {}

// ---------------------------------------------
// PERMET D'INIT LES FONCTIONS

async function init() {
	const { photographers } = await getPhotographers();
	//displayBanner(photographers);
	const { media } = await getMedia();
	iFiltMedia(media, photographers);
}

init();