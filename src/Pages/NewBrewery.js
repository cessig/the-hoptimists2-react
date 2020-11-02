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
		<div className="columns is-mobile is-multiline is-centered">
			<div className="column is-half">
				<div className="box">
					<div className="level">
						<div className="level-item has-text-centered">
							<h1 className="title is-centered">New Brewery</h1>
						</div>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="field">
							<label className="label" htmlFor="name">
								Name
							</label>
							<div className="control">
								<input
									placeholder="name"
									className="input"
									type="text"
									name="name"
									onChange={(e) => setNameInput(e.target.value)}
									value={nameInput}
								/>
							</div>
						</div>

						<input
							className="button is-primary"
							type="submit"
							value="Add Brewery"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewBrewery;
