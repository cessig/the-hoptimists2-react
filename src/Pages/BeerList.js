import React from "react";
import Beers from "../components/Beers/Beer";
import BeerModel from "../Models/BeerModel";

class BeerList extends React.Component {
	state = {
		beers: [],
	};

	componentDidMount() {
		this.fetchBeers();
	}

	fetchBeers = () => {
		BeerModel.all().then((json) => {
			console.log(json);
			this.setState({
				beers: json.beers,
			});
		});
	};

	render() {
		return this.state.beers.length ? (
			<Beers data={this.state.beers} />
		) : (
			<h3>Loading . . .</h3>
		);
	}
}

export default BeerList;
