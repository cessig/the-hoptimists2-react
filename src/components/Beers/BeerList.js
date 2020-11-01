import React from "react";
import BeerCard from "./BeerCard";

import "./Beer.css";

const Beer = (props) => {
	function generateBeerCards(beersArray) {
		return beersArray.map((beer) => {
			return <BeerCard key={beer._id} beer={beer} />;
		});
	}

	return (
		<div className="beers-container">{generateBeerCards(props.beersArray)}</div>
	);
};

export default Beer;
