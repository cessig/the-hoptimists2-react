import React, { useState, useEffect } from "react";
import BreweryModel from "../Models/BreweryModel";
import BeerList from "../components/Beers/BeerList";

const BreweryShow = function (props) {
	const [brewery, setBrewery] = useState(null);

	useEffect(() => {
		BreweryModel.show(props.match.params.id).then((json) => {
			console.log(json);
			setBrewery(json.brewery);
		});
	}, [props.match.params.id]);

	const jsx = brewery ? (
		<div>
			<h1>{brewery.name}</h1>
			<BeerList beersArray={brewery.beers} />
		</div>
	) : (
		<h3>Loading...</h3>
	);

	return jsx;
};

export default BreweryShow;
