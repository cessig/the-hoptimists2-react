import React, { useState } from "react";
import BreweryModel from "../Models/BreweryModel";

const NewBrewery = function (props) {
	const [nameInput, setNameInput] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("We got this far");
		const breweryToCreate = { name: nameInput };
		BreweryModel.create(breweryToCreate).then((json) => {
			props.history.push("/brewery");
		});
	};

	return (
		<div>
			<h2>New Brewery</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-input">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						onChange={(e) => setNameInput(e.target.value)}
						value={nameInput}
					/>
				</div>

				<input type="submit" value="Add Brewery" />
			</form>
		</div>
	);
};

export default NewBrewery;
