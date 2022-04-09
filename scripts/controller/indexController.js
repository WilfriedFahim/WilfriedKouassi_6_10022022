import { PhotographerData } from "../pages/fetchData.js";
import {} from "../pages/FetchData.js";

const URL_Json = "./data/photographers.json";

//* ---------------------------------------------
//* PERMET DE RECUPERER LES DATA JSON SOUS FORME D'OBJET

async function getPhotographers() {
	// await me permet d'attendre que "FetchData.Js recupère le json"
	const photographers = await new PhotographerData(
		URL_Json
	).getPhotographersData();
	return {
		photographers: [...photographers],
	};
}

//* ---------------------------------------------
//* PERMET DE GENERER LA CARD DU PHOTOGRAPHE AVEC SES INFOS

async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");
	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer); // ajoute chaque object à la fonction photographerFactory
		const userCardDOM = photographerModel.getUserCardDOM(); // utilise la fonction getUserCardDOM avec les infos passé en parametre
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
}

init();
