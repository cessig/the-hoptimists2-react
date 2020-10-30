const URL = "http://localhost:3001/api/v1/profile/";

class ProfileModel {
	static all = () => {
		return fetch(URL).then((response) => response.json());
	};

	static show = (profileId) => {
		return fetch(`${URL}/${profileId}`).then((response) => response.json());
	};

	static create = (profileData) => {
		return fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(profileData),
		}).then((response) => response.json());
	};

	static edit = (profileId, profileData) => {
		return fetch(`${URL}/${profileId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(profileData),
		}).then((response) => response.json());
	};
}

export default ProfileModel;
