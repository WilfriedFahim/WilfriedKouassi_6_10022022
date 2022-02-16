fetch("data/photographers.json")
	.then((res) => res.json()) // récupère et affiche le Json
	.then(function (data) {
		// seconde then qui à pour but de manipuler les données JSON
		console.table(data.photographers);

		data.photographers.forEach(function (photographer) {
			// fonction qui répète l'action pour chaque photographe
			async function getPhotographers() {
				const photographers = [
					{
						name: `${photographer.name}`,
						id: `${photographer.id}`,
						city: `${photographer.city}`,
						country: `${photographer.country}`,
						tagline: `${photographer.tagline}`,
						price: `${photographer.price}`,
						portrait: `${photographer.portrait}`,
					},
				];
				// et bien retourner le tableau photographers seulement une fois
				return {
					photographers: [...photographers],
				};
			}

			async function displayData(photographers) {
				const photographersSection = document.querySelector(
					".photographer_section"
				);

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
		});
	});
