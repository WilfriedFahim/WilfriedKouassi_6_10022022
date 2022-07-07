//* ---------------------------------------------
//* PERMET D'INCREMENTER LE NOMBRE DE LIKE DE 1 ET -1
//* PERMET DE CALCULER AUTOMATIQUEMENT LE NOMBRE TOTAL DE LIKE

function incrementeMe(e) {
	const all = document.querySelectorAll(".nbrLikes");
	const allLength = document.querySelectorAll(".nbrLikes").length;
	var liveResult = 0;

	if (e.currentTarget.liveLike.textContent == e.currentTarget.jsonLikes) {
		e.currentTarget.liveLike.textContent++;

		//____ Calcule le nombre de like en live via la récursivité
		function calculTotalLiveLike(allLength) {
			for (let i = 0; i < allLength; i++)
				liveResult = liveResult + parseInt(all[i].textContent);
			return liveResult;
		}
		calculTotalLiveLike(allLength);
	} else {
		e.currentTarget.liveLike.textContent--;

		//____ Calcule le nombre de like en live via la récursivité
		function calculTotalLiveLike(allLength) {
			for (let i = 0; i < allLength; i++)
				liveResult = liveResult + parseInt(all[i].textContent);
			return liveResult;
		}
		calculTotalLiveLike(allLength);
	}
	document.getElementById("likeAll").textContent = liveResult;
}

//* ---------------------------------------------
//* LIGHTBOX

lightbox = (e) => {
	console.log(e.currentTarget.mediasInfos);
	const btnCloseLightbox = document.getElementsByClassName("icon fas fa-times");
	const image = document.getElementsByClassName("imageLightbox");
	const video = document.getElementsByClassName("videoLightboxInfos");
	const prev = document.getElementsByClassName("prev");
	const titleBox = document.getElementsByClassName("textImage");
	prev[0].focus();
	const next = document.getElementsByClassName("next");
	var previewbox = document.getElementsByClassName("preview-box");

	let titleLightbox = e.currentTarget.dataaA.title;
	let idCurrentTarget = e.currentTarget.dataaA.id;
	let arrayMediaInfos = e.currentTarget.mediasInfos;
	let indexCurrentTarget = arrayMediaInfos.findIndex(
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

	//____ Navigation au clavier
	function keyArrowLeft(e) {
		newIndex = newIndex - 1;
		var aaa = arrayMediaInfos[newIndex];
		if (newIndex >= 0) {
			if (aaa.image && newIndex >= 0) {
				const picture = `assets/SamplePhotos/${aaa.photographerId}/${aaa.image}`;
				let previousTitleBox = aaa.title;
				video[0].setAttribute("src", "");
				video[0].style.display = "none";
				image[0].setAttribute("src", picture);
				image[0].style.display = "block";
				titleBox[0].textContent = previousTitleBox;
				titleBox[0].style.display = "block";
			} else if (aaa.video && newIndex >= 0) {
				const videoMedia = `assets/SamplePhotos/${aaa.photographerId}/${aaa.video}`;
				let previousTitleBox = aaa.title;
				image[0].setAttribute("src", "");
				image[0].style.display = "none";
				video[0].setAttribute("src", videoMedia);
				video[0].style.display = "block";
				titleBox[0].textContent = previousTitleBox;
				titleBox[0].style.display = "block";
			}
		} else {
			e.preventDefault();
			newIndex = 0;
		}
		console.log(newIndex);
	}

	function keyArrowRight(e) {
		newIndex = newIndex + 1;
		var aaa = arrayMediaInfos[newIndex];
		if (newIndex <= arrayMediaInfos.length - 1) {
			if (aaa.image) {
				const picture = `assets/SamplePhotos/${aaa.photographerId}/${aaa.image}`;
				let previousTitleBox = aaa.title;
				video[0].setAttribute("src", "");
				video[0].style.display = "none";
				image[0].setAttribute("src", picture);
				image[0].style.display = "block";
				titleBox[0].textContent = previousTitleBox;
				titleBox[0].style.display = "block";
			} else if (aaa.video) {
				const videoMedia = `assets/SamplePhotos/${aaa.photographerId}/${aaa.video}`;
				let previousTitleBox = aaa.title;
				image[0].setAttribute("src", "");
				image[0].style.display = "none";
				video[0].setAttribute("src", videoMedia);
				video[0].style.display = "block";
				titleBox[0].textContent = previousTitleBox;
				titleBox[0].style.display = "block";
			}
		} else {
			e.preventDefault();
			newIndex = arrayMediaInfos.length - 1;
		}
		console.log(newIndex);
	}

	window.addEventListener("keydown", (e) => {
		if (e.keyCode === 37) {
			keyArrowLeft(e);
			console.log("Hello left");
		} else if (e.keyCode === 39) {
			keyArrowRight(e);
			console.log("Hello Right");
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
