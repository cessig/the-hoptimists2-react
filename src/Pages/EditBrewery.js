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
			<div className="columns is-mobile is-multiline is-centered">
				<div className="column is-half">
					<div className="box">
						<div className="level">
							<div className="level-item has-text-centered">
								<h2 className="title is-centered">Edit {brewery.name}</h2>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="field">
								<label className="label" htmlFor="name">
									Name
								</label>
								<div className="control">
									<input
										type="text"
										name="name"
										onChange={(e) => seteditNameInput(e.target.value)}
										value={editNameInput}
									/>
								</div>
							</div>

							<input
								className="button is-success is-light"
								type="submit"
								value="Update Brewery"
							/>
						</form>
						<div>
							<div className="delete-button ">
								<button className="button is-danger" onClick={handleDelete}>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	) : (
		<h3>Loading...</h3>
	);
};

export default EditBrewery;
