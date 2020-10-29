const URL = "http://localhost:3001/api/v1/beers/";

class BeerModel {
	static all = () => {
		return fetch(URL).then((response) => response.json());
	};

	static show = (beerId) => {
		return fetch(`${URL}/${beerId}`).then((response) => response.json());
	};

	static create = (beerData) => {
		return fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(beerData),
		}).then((response) => response.json());
	};

	static edit = (beerId, beerData) => {
		return fetch(`${URL}/${beerId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(beerData),
		}).then((response) => response.json());
	};
}

export default BeerModel;
