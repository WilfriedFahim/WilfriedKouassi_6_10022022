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
	prev[0].focus();
	const next = document.getElementsByClassName("next");
	const all = document.getElementsByClassName("photographer_section");
	var previewbox = document.getElementsByClassName("preview-box");

	let idCurrentTarget = e.currentTarget.dataaA.id;
	let arrayMediaInfos = e.currentTarget.mediasInfos;
	let indexCurrentTarget = arrayMediaInfos.findIndex(
		(element) => element.id === idCurrentTarget
	);

	var newIndex = indexCurrentTarget;

	console.log(indexCurrentTarget);

	if (e.currentTarget.dataaA.image) {
		video[0].setAttribute("src", "");
		video[0].style.display = "none";
		image[0].setAttribute("src", e.currentTarget.imgSrc);
		image[0].style.display = "block";
	} else if (e.currentTarget.dataaA.video) {
		image[0].setAttribute("src", "");
		image[0].style.display = "none";
		video[0].setAttribute("src", e.currentTarget.vidSrc);
		video[0].style.display = "block";
	}

	prev[0].onclick = function () {
		newIndex = newIndex - 1;
		var aaa = arrayMediaInfos[newIndex];
		console.log(aaa);
		if (aaa.image) {
			const picture = `assets/SamplePhotos/${aaa.photographerId}/${aaa.image}`;
			video[0].setAttribute("src", "");
			video[0].style.display = "none";
			image[0].setAttribute("src", picture);
			image[0].style.display = "block";
		} else if (aaa.video) {
			const videoMedia = `assets/SamplePhotos/${aaa.photographerId}/${aaa.video}`;
			image[0].setAttribute("src", "");
			image[0].style.display = "none";
			video[0].setAttribute("src", videoMedia);
			video[0].style.display = "block";
		}
	};

	next[0].addEventListener("click", () => {
		newIndex = newIndex + 1;
		var aaa = arrayMediaInfos[newIndex];
		console.log(aaa);
		if (aaa.image) {
			const picture = `assets/SamplePhotos/${aaa.photographerId}/${aaa.image}`;
			video[0].setAttribute("src", "");
			video[0].style.display = "none";
			image[0].setAttribute("src", picture);
			image[0].style.display = "block";
		} else if (aaa.video) {
			const videoMedia = `assets/SamplePhotos/${aaa.photographerId}/${aaa.video}`;
			image[0].setAttribute("src", "");
			image[0].style.display = "none";
			video[0].setAttribute("src", videoMedia);
			video[0].style.display = "block";
		}
	});

	previewbox[0].style.display = "block";

	btnCloseLightbox[0].onclick = function () {
		previewbox[0].style.display = "none";
	};
};
