import { PhotographerData } from "../utils/fetchData.js";
import {} from "../utils/FetchData.js";

const URL_Json = "./data/photographers.json";

async function getPhotographers() {
	// await me permet d'attendre que "FetchData.Js recupère le json"
	const photographers = await new PhotographerData(
		URL_Json
	).getPhotographersData();
	console.table(photographers);
	return {
		photographers: [...photographers],
	};
}

async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");
	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
}

init();
