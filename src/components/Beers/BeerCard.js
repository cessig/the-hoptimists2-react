import React from "react";
import { Link } from "react-router-dom";

const BeerCard = (props) => {
	const { name, style, notes, rating, brewery, _id } = props.beer;
	return (
		<>
			<Link to={`/beer/${_id}`}>
				<div className="beer-card">
					<div className="image-wrapper"></div>
					<h3>{name}</h3>
					<p>
						{brewery}, {style}, {notes}, {rating},
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
