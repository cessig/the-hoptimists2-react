import React, { useState, useEffect } from "react";
import BreweryModel from "../Models/BreweryModel";

const EditBrewery = function (props) {
	const [editNameInput, seteditNameInput] = useState("");
	const [brewery, setBrewery] = useState(null);

	useEffect(() => {
		BreweryModel.show(props.match.params.id).then((json) => {
			console.log(json);
			setBrewery(json.brewery);
			seteditNameInput(json.brewery.name);
		});
	}, [props.match.params.id]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("We got this far");
		const breweryToEdit = { name: editNameInput };

		BreweryModel.edit(props.match.params.id, breweryToEdit).then((json) => {
			props.history.push(`/brewery/${props.match.params.id}`);
		});
	};

	const handleDelete = () => {
		console.log("We got this far");

		BreweryModel.destroy(props.match.params.id).then((json) => {
			props.history.push("/brewery/");
		});
	};

	return brewery ? (
		<>
			<div>
				<h2>Edit {brewery.name}</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-input">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							onChange={(e) => seteditNameInput(e.target.value)}
							value={editNameInput}
						/>
					</div>

					<input type="submit" value="Update Brewery" />
				</form>
			</div>
			<div>
				<div className="delete-button">
					<button className="button is-danger" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</>
	) : (
		<h3>Loading...</h3>
	);
};

export default EditBrewery;
