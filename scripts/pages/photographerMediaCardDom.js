//* PERMET DE CONSTRUIRE LE MEDIA
function mediaFactory(dataA, mediaInfos) {
	let {
		id,
		photographerId,
		title,
		image,
		video,
		likes,
		date,
		price,
		description,
	} = dataA;

	const picture = `assets/SamplePhotos/${photographerId}/${image}`;
	const videoMedia = `assets/SamplePhotos/${photographerId}/${video}`;
	// J'utilise l'id pour trouver le chemin car j'ai nommé chaque dossier
	// photographe par son id et pas par son nom

	function getUserCardMedia() {
		const article = document.createElement("article");

		if (image) {
			//* CREATION DE LA DIV "blocHaut-img" ET DE SON CONTENU

			const blocHaut = document.createElement("div");
			blocHaut.setAttribute("class", "blocHaut-img");
			const img = document.createElement("img");
			img.setAttribute("src", picture);
			img.setAttribute("label-aria", title);
			img.setAttribute("alt", image);
			blocHaut.appendChild(img);
			article.appendChild(blocHaut);

			//* CREATION DE LA DIV "blocBas-infos"

			const blocBasInfos = document.createElement("div");
			blocBasInfos.setAttribute("class", "blocBas-infos");
			article.appendChild(blocBasInfos);

			// __titre
			const blocBasInfos_Titre = document.createElement("div");
			blocBasInfos_Titre.setAttribute("class", "blocBas-infos__titre");
			blocBasInfos.appendChild(blocBasInfos_Titre);
			const info_p = document.createElement("p");
			info_p.setAttribute("class", "title");
			info_p.textContent = title;
			blocBasInfos_Titre.appendChild(info_p);

			// __data
			const blocBasInfos_data = document.createElement("div");
			blocBasInfos_data.setAttribute("class", "blocBas-infos__data");
			blocBasInfos_data.setAttribute("id", id);
			blocBasInfos.appendChild(blocBasInfos_data);

			//__-__nbr de like
			let dataImg_p = document.createElement("p");
			dataImg_p.setAttribute("class", "nbrLikes");
			dataImg_p.setAttribute("aria-label", "likes");
			dataImg_p.setAttribute("role", "term");
			dataImg_p.textContent = likes;
			blocBasInfos_data.appendChild(dataImg_p);

			//__-__coeur svg
			const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			const path1 = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"path"
			);
			svg.setAttribute("viewBox", "0 0 512 512");
			svg.setAttribute("class", "like");
			path1.setAttribute(
				"d",
				"M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
			);
			svg.appendChild(path1);
			blocBasInfos_data.appendChild(svg);

			//* __Fonction anonyme qui incrémente les likes

			svg.addEventListener("click", incrementeMe);
			svg.liveLike = dataImg_p; // création du params de la fonction incrementeMe
			svg.jsonLikes = likes; //création du params de la fonction incrementeMe

			//* __Fonction anonyme qui exécute la fonction lightbox

			blocHaut.addEventListener("click", lightbox);
			blocHaut.dataaA = dataA; //création du params de la fonction lightbox
			blocHaut.mediasInfos = mediaInfos; //création du params de la fonction lightbox
			blocHaut.imgSrc = picture; //création du params de la fonction lightbox
			blocHaut.vidSrc = videoMedia; //création du params de la fonction lightbox
		} else if (video) {
			//* CREATION DE LA DIV "blocHaut-vid" ET DE SON CONTENU

			const blocHaut = document.createElement("div");
			blocHaut.setAttribute("class", "blocHaut-vid");
			const vid = document.createElement("video");
			vid.controls = "controls";
			const vid_source = document.createElement("source");
			vid_source.setAttribute("src", videoMedia);
			vid_source.setAttribute("type", "video/mp4");
			vid_source.setAttribute("label-aria", title);
			vid_source.setAttribute("alt", video);
			blocHaut.appendChild(vid);
			vid.appendChild(vid_source);

			article.appendChild(blocHaut);

			//* CREATION DE LA DIV "blocBas-infos"

			const blocBasInfos = document.createElement("div");
			blocBasInfos.setAttribute("class", "blocBas-infos");
			article.appendChild(blocBasInfos);

			// __titre
			const blocBasInfos_Titre = document.createElement("div");
			blocBasInfos_Titre.setAttribute("class", "blocBas-infos__titre");
			blocBasInfos.appendChild(blocBasInfos_Titre);
			const info_p = document.createElement("p");
			info_p.setAttribute("class", "title");
			info_p.textContent = title;
			blocBasInfos_Titre.appendChild(info_p);

			// __data
			const blocBasInfos_data = document.createElement("div");
			blocBasInfos_data.setAttribute("class", "blocBas-infos__data");
			blocBasInfos_data.setAttribute("id", id);
			blocBasInfos.appendChild(blocBasInfos_data);
			const dataVid_p = document.createElement("p");
			dataVid_p.setAttribute("class", "nbrLikes");
			dataVid_p.setAttribute("aria-label", "likes");
			dataVid_p.setAttribute("role", "term");
			dataVid_p.textContent = likes;
			blocBasInfos_data.appendChild(dataVid_p);

			//__-__coeur svg
			const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			const path1 = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"path"
			);
			svg.setAttribute("viewBox", "0 0 512 512");
			svg.setAttribute("class", "like");
			path1.setAttribute(
				"d",
				"M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
			);
			svg.appendChild(path1);
			blocBasInfos_data.appendChild(svg);

			//* __Fonction anonyme qui incrémente les likes

			svg.addEventListener("click", incrementeMe);
			svg.liveLike = dataVid_p; //création du params de la fonction incrementeMe
			svg.jsonLikes = likes; //création du params de la fonction incrementeMe

			//* __Fonction anonyme qui exécute la fonction lightbox

			blocHaut.addEventListener("click", lightbox); //création du params de la fonction lightbox
			blocHaut.dataaA = dataA; //création du params de la fonction lightbox
			blocHaut.mediasInfos = mediaInfos; //création du params de la fonction lightbox
			blocHaut.imgSrc = picture; //création du params de la fonction lightbox
			blocHaut.vidSrc = videoMedia; //création du params de la fonction lightbox
		}

		return article;
	}

	return {
		id,
		photographerId,
		title,
		image,
		video,
		likes,
		date,
		price,
		description,
		getUserCardMedia,
	};
}
