//* ---------------------------------------------
//* PERMET D'INCREMENTER LE NOMBRE DE LIKE DE 1 ET -1
//* PERMET DE CALCULER AUTOMATIQUEMENT LE NOMBRE TOTAL DE LIKE

function incrementeMe(e) {
	const nbrLikesDiv = document.querySelectorAll(".nbrLikes");
	const nbrLikesDivLength = document.querySelectorAll(".nbrLikes").length;
	var liveResult = 0;

	if (e.currentTarget.liveLike.textContent == e.currentTarget.jsonLikes) {
		e.currentTarget.liveLike.textContent++;

		//____ Calcule le nombre de like en live via la récursivité
		function calculTotalLiveLike(nbrLikesDivLength) {
			for (let i = 0; i < nbrLikesDivLength; i++)
				liveResult = liveResult + parseInt(nbrLikesDiv[i].textContent); //On parse le contenu de la div afin de pouvoir l'utiliser dans le calcul
			return liveResult;
		}
		calculTotalLiveLike(nbrLikesDivLength);
	} else {
		e.currentTarget.liveLike.textContent--;

		//____ Calcule le nombre de like en live via la récursivité
		function calculTotalLiveLike(nbrLikesDivLength) {
			for (let i = 0; i < nbrLikesDivLength; i++)
				liveResult = liveResult + parseInt(nbrLikesDiv[i].textContent); //On parse le contenu de la div afin de pouvoir l'utiliser dans le calcul
			return liveResult;
		}
		calculTotalLiveLike(nbrLikesDivLength);
	}
	document.getElementById("likeAll").textContent = liveResult;
}

//* ---------------------------------------------
//* PERMET D'AFFICHER LA LIGHTBOX

lightbox = (e) => {
	const btnCloseLightbox = document.getElementsByClassName("icon fas fa-times");
	const image = document.getElementsByClassName("imageLightbox");
	const video = document.getElementsByClassName("videoLightboxInfos");
	const prev = document.getElementsByClassName("prev");
	const titleBox = document.getElementsByClassName("textImage");
	prev[0].focus(); //Le premier focus se fera sur la fleche de gauche dans la lightbox
	const next = document.getElementsByClassName("next");
	var previewbox = document.getElementsByClassName("preview-box");

	let titleLightbox = e.currentTarget.dataaA.title; // On récupère le titre du target actuel
	let idCurrentTarget = e.currentTarget.dataaA.id; // On récupère l'ID du target actuel
	let arrayMediaInfos = e.currentTarget.mediasInfos; // On récupère le tableau dans lequel le target actuel se trouve
	let indexCurrentTarget = arrayMediaInfos.findIndex(
		//On determine l'index du target actuel grace à son id récuperer
		(element) => element.id === idCurrentTarget
	);
	var newIndex = indexCurrentTarget;

	//____ Affichage de l'image et du titre dans la lightbox
	if (e.currentTarget.dataaA.image) {
		video[0].setAttribute("src", "");
		video[0].style.display = "none";
		image[0].setAttribute("src", e.currentTarget.imgSrc);
		image[0].style.display = "block";
		titleBox[0].textContent = titleLightbox;
		titleBox[0].style.display = "block";
	} else if (e.currentTarget.dataaA.video) {
		image[0].setAttribute("src", "");
		image[0].style.display = "none";
		video[0].setAttribute("src", e.currentTarget.vidSrc);
		video[0].style.display = "block";
		titleBox[0].textContent = titleLightbox;
		titleBox[0].style.display = "block";
	}

	//____ Navigation au clavier "Fleche de gauche"
	function keyArrowLeft(e) {
		newIndex = newIndex - 1;
		var newCurrentMedia = arrayMediaInfos[newIndex]; //On récupère le nouveau media actuel grace à l'index
		if (newIndex >= 0) {
			if (newCurrentMedia.image && newIndex >= 0) {
				const picture = `assets/SamplePhotos/${newCurrentMedia.photographerId}/${newCurrentMedia.image}`; // On reconstruit le nouveau chemin de la nouvelle image
				let previousTitleBox = newCurrentMedia.title;
				video[0].setAttribute("src", "");
				video[0].style.display = "none";
				image[0].setAttribute("src", picture);
				image[0].style.display = "block";
				titleBox[0].textContent = previousTitleBox;
				titleBox[0].style.display = "block";
			} else if (newCurrentMedia.video && newIndex >= 0) {
				const videoMedia = `assets/SamplePhotos/${newCurrentMedia.photographerId}/${newCurrentMedia.video}`; // On reconstruit le nouveau chemin de la nouvelle video
				let previousTitleBox = newCurrentMedia.title;
				image[0].setAttribute("src", "");
				image[0].style.display = "none";
				video[0].setAttribute("src", videoMedia);
				video[0].style.display = "block";
				titleBox[0].textContent = previousTitleBox;
				titleBox[0].style.display = "block";
			}
		} else { // si l'index est inférieur à zéro on bloque son comportement par default
			e.preventDefault();
			newIndex = 0;
		}
	}

	//____ Navigation au clavier "Fleche de droite"
	function keyArrowRight(e) {
		newIndex = newIndex + 1;
		var aaa = arrayMediaInfos[newIndex];
		if (newIndex <= arrayMediaInfos.length - 1) {
			if (aaa.image) {
				const picture = `assets/SamplePhotos/${aaa.photographerId}/${aaa.image}`; // On reconstruit le nouveau chemin de la nouvelle image
				let previousTitleBox = aaa.title;
				video[0].setAttribute("src", "");
				video[0].style.display = "none";
				image[0].setAttribute("src", picture);
				image[0].style.display = "block";
				titleBox[0].textContent = previousTitleBox;
				titleBox[0].style.display = "block";
			} else if (aaa.video) {
				const videoMedia = `assets/SamplePhotos/${aaa.photographerId}/${aaa.video}`; // On reconstruit le nouveau chemin de la nouvelle video
				let previousTitleBox = aaa.title;
				image[0].setAttribute("src", "");
				image[0].style.display = "none";
				video[0].setAttribute("src", videoMedia);
				video[0].style.display = "block";
				titleBox[0].textContent = previousTitleBox;
				titleBox[0].style.display = "block";
			}
		} else {//si l'index est supérieur à la longueur du tabeau -1 on bloque son comportement par default
			e.preventDefault();
			newIndex = arrayMediaInfos.length - 1;
		}
	}

	window.addEventListener("keydown", (e) => {
		if (e.keyCode === 37) {
			keyArrowLeft(e);
		} else if (e.keyCode === 39) {
			keyArrowRight(e);

		}
	});

	btnCloseLightbox[0].onclick = function () {
		previewbox[0].style.display = "none";
	};

	//____ bouton précedent lightbox
	prev[0].addEventListener("click", keyArrowLeft);

	//____ bouton suivant lightbox
	next[0].addEventListener("click", keyArrowRight);

	previewbox[0].style.display = "block";
};
