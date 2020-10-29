import React from "react";
import BeerCard from "./BeerCard";

import "./Beer.css";

const Beer = (props) => {
	function generateBeerCards(beer) {
		return beer.map((beer) => {
			return <BeerCard key={beer._id} beer={beer} />;
		});
	}

	return <div className="beers-container">{generateBeerCards(props.data)}</div>;
};

export default Beer;
