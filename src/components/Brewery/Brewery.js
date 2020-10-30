import React from "react";
import BreweryCard from "./BreweryCard";

import "./Brewery.css";

const Brewery = (props) => {
	function generateBreweryCards(brewery) {
		return brewery.map((brewery) => {
			return <BreweryCard key={brewery._id} brewery={brewery} />;
		});
	}

	return (
		<div className="brewery-container">{generateBreweryCards(props.data)}</div>
	);
};

export default Brewery;
