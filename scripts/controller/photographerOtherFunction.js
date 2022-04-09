//* ---------------------------------------------
//* PERMET D'INCREMENTER LE NOMBRE DE LIKE DE 1 ET -1

function incrementeMe(e) {
	if (e.currentTarget.liveLike.textContent == e.currentTarget.jsonLikes) {
		e.currentTarget.liveLike.textContent++;
	} else {
		e.currentTarget.liveLike.textContent--;
	}
}

//* ---------------------------------------------
//* ----
