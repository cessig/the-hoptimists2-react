import React from "react";
import { Link } from "react-router-dom";

const BeerCard = (props) => {
	const { name, style, notes, rating, brewery, _id, breweryName } = props.beer;
	console.log(brewery);
	return (
		<>
			<Link to={`/beers/${_id}`}>
				<div className="beer-card">
					<div className="image-wrapper"></div>
					<h3>{name}</h3>
					<p>
						{breweryName && `${breweryName}, `}
						{style}, {notes}, {rating},
					</p>
				</div>
			</Link>
			<Link to={`/beers/${_id}/edit`} style={{ color: "black" }}>
				Edit
			</Link>
		</>
	);
};

export default BeerCard;
