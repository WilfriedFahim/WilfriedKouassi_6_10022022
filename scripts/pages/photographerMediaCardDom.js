//* PERMET DE CONSTRUIRE LE MEDIA
function mediaFactory(dataA) {
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
			let dataImg_p = document.createElement("p");
			dataImg_p.setAttribute("class", "nbrLikes");
			dataImg_p.textContent = likes;
			blocBasInfos_data.appendChild(dataImg_p);
			//! NE PAS OUBLIER LE SVG COEUR

			//* __Fonction qui incrémente les likes
			dataImg_p.addEventListener("click", () => {
				if (dataImg_p.textContent == likes) {
					dataImg_p.textContent++;
				} else {
					dataImg_p.textContent--;
				}
			});
		} else if (video) {
			//* CREATION DE LA DIV "blocHaut-vid" ET DE SON CONTENU
			const blocHaut = document.createElement("div");
			blocHaut.setAttribute("class", "blocHaut-vid");
			const vid = document.createElement("video");
			vid.controls = "controls";
			const vid_source = document.createElement("source");
			vid_source.setAttribute("src", videoMedia);
			vid_source.setAttribute("type", "video/mp4");
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
			dataVid_p.textContent = likes;
			blocBasInfos_data.appendChild(dataVid_p);
			//! NE PAS OUBLIER LE SVG COEUR

			//* __FONCTION QUI INCREMENTE LES LIKES
			dataVid_p.addEventListener("click", () => {
				if (dataVid_p.textContent == likes) {
					dataVid_p.textContent++;
				} else {
					dataVid_p.textContent--;
				}
			});
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
