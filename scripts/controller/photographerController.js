import { MediaData } from "../controller/fetchMedia.js";
import {} from "../controller/fetchMedia.js";

import { PhotographerData } from "../controller/fetchData.js";
import {} from "../controller/fetchData.js";

const URL_Data_Json = "./data/photographers.json";

var totalLikes;
var mediaInfos = [];

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

	mediaInfos = media.filter(
		(element) => element.photographerId == ids // Me permet de recup l'objet du photographe
	); // rattacher à l'ID comparé

	const photographer = photographers.filter(
		(element) => element.id == ids // Me permet de recup  l'objet du photographe
	); // rattacher à l'ID comparé

	displayBanner(photographer);
	displayMedia(mediaInfos);
	sortBy(mediaInfos);
}

//* ---------------------------------------------
//* PERMET DE RECUPERER ET D'AFFICHER LA BANNIERE DU PHOTOGRAPHE

async function displayBanner(photographers) {
	const headerSection = document.querySelector(".section_header");
	photographers.forEach((photographer) => {
		const BannerModel = bannerPhotographerFactory(photographer); // ajoute chaque object à la fonction photographerFactory
		const BannerCard = BannerModel.getBannerPhotographer(); // utilise la fonction getUserCardDOM avec les infos passé en parametre
		headerSection.appendChild(BannerCard);
	});
}

//* ---------------------------------------------
//* PERMET DE RECUPERER ET D'AFFICHER LA PAGE DU PHOTOGRAPHE AVEC SES MEDIAS

async function displayMedia(mediaInfos) {
	const cardSection = document.querySelector(".photographer_media");
	cardSection.innerHTML = ""; // vide le tableau et reconstruit ensuite

	totalLikes = 0; // initialise à zéro le total des likes de la box en bas de la page
	mediaInfos.forEach((mediaInfo) => {
		totalLikes = totalLikes + mediaInfo.likes; // calcul le total des likes
		document.getElementById("likeAll").textContent = totalLikes;
		const cardModel = mediaFactory(mediaInfo, mediaInfos);
		const userCardMedia = cardModel.getUserCardMedia();
		cardSection.appendChild(userCardMedia);
	});
}

//* ---------------------------------------------
//* PERMET DE TRIER LES MEDIA

function sortBy(mediaInfos) {
	const select = document.querySelector("select");
	select.addEventListener("click", function (e) {
		if (this.value === "0") {
			//On récupère la valeur du click puis on le trie
			mediaInfos = mediaInfos.sort((a, b) => {
				return -a.likes + b.likes;
			}); // Trie par likes (popularité)
		} else if (this.value === "1") {
			mediaInfos = mediaInfos.sort((a, b) => {
				return new Date(a.date) - new Date(b.date);
			}); //Trie par date
		} else if (this.value === "2") {
			mediaInfos = mediaInfos.sort((a, b) => {
				return a.title.localeCompare(b.title);
			}); // Trie par titre
		}
		displayMedia(mediaInfos);
	});
}

//* ---------------------------------------------
//* MODAL CONTACTEZ-MOI

const modalbg = document.getElementById("contact_modal");
const btnClose = document.getElementsByClassName("close1");
const buttonContact = document.getElementsByClassName("contact_button");

// _______ fermeture du modal via la croix

btnClose[0].onclick = function () {
	modalbg.style.display = "none";
}; //BtnClose[0] car c'est une Collection et que "[0]" permet de récup img.close1 , la div !

// ___________ Envoi le formulaire dans la console
buttonContact[0].onclick = (e) => {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	if (firstName === "" || lastName === "" || email === "" || message === "") {
		e.preventDefault();
		alert("Veuillez remplir le formulaire");
	} else {
		console.log("Votre prenom :" + firstName);
		console.log("Votre nom :" + lastName);
		console.log("Votre email :" + email);
		console.log("Votre message :" + message);
		e.preventDefault();
	}
};

//* ---------------------------------------------
//* PERMET D'INIT LES FONCTIONS

async function init() {
	const { photographers } = await getPhotographers();
	//displayBanner(photographers);
	const { media } = await getMedia();
	iFiltMedia(media, photographers);
}

init();
