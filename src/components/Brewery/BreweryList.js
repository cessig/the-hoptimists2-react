import React from "react";
import BreweryCard from "./BreweryCard";

import "./Brewery.css";

const Brewery = (props) => {
	function generateBreweryCards(breweryArray) {
		return breweryArray.map((brewery) => {
			return <BreweryCard key={brewery._id} brewery={brewery} />;
		});
	}
	console.log(props);

	return (
		<div className="brewery-container">{generateBreweryCards(props.data)}</div>
	);
};

export default Brewery;
