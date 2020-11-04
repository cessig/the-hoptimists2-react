import React, { useState, useEffect } from "react";
import BeerModel from "../Models/BeerModel";

const EditBeer = function (props) {
	const [beers, setBeers] = useState(null);
	const [editNameInput, setEditNameInput] = useState("");
	const [editStyleInput, setEditStyleInput] = useState("");
	const [editNotesInput, setEditNotesInput] = useState("");
	const [editRatingInput, setEditRatingInput] = useState("");

	useEffect(() => {
		BeerModel.show(props.match.params.id).then((json) => {
			console.log(json);
			setBeers(json.beer);
			setEditNameInput(json.beer.name);
			setEditStyleInput(json.beer.style);
			setEditNotesInput(json.beer.notes);
			setEditRatingInput(json.beer.rating);
		});
	}, [props.match.params.id]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("We got this far");
		const beerToEdit = {
			name: editNameInput,
			style: editStyleInput,
			notes: editNotesInput,
			rating: editRatingInput,
		};
		BeerModel.edit(props.match.params.id, beerToEdit).then((json) => {
			props.history.push(`/beers/${props.match.params.id}`);
		});
	};

	const handleDelete = () => {
		console.log("We got this far");

		BeerModel.destroy(props.match.params.id).then((json) => {
			props.history.push("/beers/");
		});
	};

	return beers ? (
		<>
			<div className="columns is-mobile is-multiline is-centered">
				<div className="column is-half">
					<div className="box">
						<div classname="level">
							<div className="level-item has-text-centered">
								<h1 className="title is-centered">Edit {beers.name}</h1>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="field">
								<label className="label" htmlFor="name">
									Name
								</label>
								<div className="control">
									<input
										className="input"
										type="text"
										name="name"
										onChange={(e) => setEditNameInput(e.target.value)}
										value={editNameInput}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label" htmlFor="style">
									Style
								</label>
								<div className="control">
									<input
										className="input"
										type="text"
										name="style"
										onChange={(e) => setEditStyleInput(e.target.value)}
										value={editStyleInput}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label" htmlFor="notes">
									Notes
								</label>
								<div className="control">
									<input
										className="input"
										type="text"
										name="notes"
										onChange={(e) => setEditNotesInput(e.target.value)}
										value={editNotesInput}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label" htmlFor="Rating">
									Rating
								</label>
								<div className="control">
									<div className="select">
										<select
											value={editRatingInput}
											onChange={(e) => setEditRatingInput(e.target.value)}
										>
											{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ratingNumber) => {
												return (
													<option value={ratingNumber}>{ratingNumber}</option>
												);
											})}
										</select>
									</div>
								</div>
							</div>
							<input
								className="button is-primary"
								type="submit"
								value="Update Beer"
							/>
						</form>
						<div>
							<div className="delete-button">
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

export default EditBeer;
