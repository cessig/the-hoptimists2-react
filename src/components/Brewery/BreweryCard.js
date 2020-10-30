import React from "react";
import { Link } from "react-router-dom";

const BreweryCard = (props) => {
	const { name, beers, _id } = props.brewery;
	return (
		<>
			<Link to={`/brewery/${_id}`}>
				<div className="brewery-card">
					<div className="image-wrapper"></div>
					<h3>{name}</h3>
					{/* <p>{beers}</p> */}
				</div>
			</Link>
			<Link to={`/brewery/${_id}/edit`} style={{ color: "black" }}>
				Edit
			</Link>
		</>
	);
};

export default BreweryCard;
