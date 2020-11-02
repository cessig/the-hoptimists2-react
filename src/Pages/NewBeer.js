import React, { useState, useEffect } from "react";
import BreweryModel from "../Models/BreweryModel";
import BeerModel from "../Models/BeerModel";

const NewBeer = function (props) {
	const [nameInput, setNameInput] = useState("");
	const [styleInput, setStyleInput] = useState("");
	const [notesInput, setNotesInput] = useState("");
	const [ratingInput, setRatingInput] = useState("");
	const [breweryInput, setBreweryInput] = useState("");

	const [brewerys, setBrewerys] = useState([]);

	useEffect(() => {
		BreweryModel.all().then((json) => {
			console.log(json);
			setBrewerys(json.brewery);
		});
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("We got this far");
		const beerToCreate = {
			name: nameInput,
			style: styleInput,
			notes: notesInput,
			rating: ratingInput,
			brewery: breweryInput,
		};

		BeerModel.create(beerToCreate).then((json) => {
			props.history.push("/beers");
		});
	};

	return (
		<div>
			<h2>New Beer</h2>
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label className="label" htmlFor="name">
						Name
					</label>
					<div className="control">
						<input
							className="input"
							type="text"
							placeholder="name"
							onChange={(e) => setNameInput(e.target.value)}
							value={nameInput}
						/>
					</div>
				</div>
				<div className="form-input">
					<label htmlFor="Style">Style</label>
					<input
						type="text"
						name="style"
						onChange={(e) => setStyleInput(e.target.value)}
						value={styleInput}
					/>
				</div>
				<div className="form-input">
					<label htmlFor="Notes">Notes</label>
					<input
						type="text"
						name="notes"
						onChange={(e) => setNotesInput(e.target.value)}
						value={notesInput}
					/>
				</div>
				<div className="field">
					<label className="label" htmlFor="Rating">
						Rating
					</label>
					<div className="control">
						<div className="select">
							<select
								value={ratingInput}
								onChange={(e) => setRatingInput(e.target.value)}
							>
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ratingNumber) => {
									return <option value={ratingNumber}>{ratingNumber}</option>;
								})}
							</select>
						</div>
					</div>
				</div>
				<div className="field">
					<label className="label" htmlFor="Brewerys">
						Brewerys
					</label>
					<div className="control">
						<div className="select">
							<select
								value={breweryInput}
								onChange={(e) => setBreweryInput(e.target.value)}
							>
								{brewerys.map((brewery) => {
									return <option value={brewery._id}>{brewery.name}</option>;
								})}
							</select>
						</div>
					</div>
				</div>

				<input type="submit" value="Add Beer" />
			</form>
		</div>
	);
};

export default NewBeer;
