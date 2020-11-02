const URL = "http://localhost:3001/api/v1/brewery/";

class BreweryModel {
	static all = () => {
		return fetch(URL).then((response) => response.json());
	};

	static show = (breweryId) => {
		return fetch(`${URL}/${breweryId}`).then((response) => response.json());
	};

	static create = (breweryData) => {
		return fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(breweryData),
		}).then((response) => response.json());
	};

	static edit = (breweryId, breweryData) => {
		return fetch(`${URL}/${breweryId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(breweryData),
		}).then((response) => response.json());
	};

	static destroy = (breweryId) => {
		return fetch(`${URL}/${breweryId}`, {
			method: "DELETE",
		}).then((response) => response.json());
	};
}

export default BreweryModel;
