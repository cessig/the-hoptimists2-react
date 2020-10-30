import React from "react";
import BreweryModel from "../Models/BreweryModel";
import Brewery from "../components/Brewery/Brewery";

class BreweryList extends React.Component {
	state = {
		brewery: [],
	};

	componentDidMount() {
		this.fetchBrewery();
	}

	fetchBrewery = () => {
		BreweryModel.all().then((json) => {
			console.log(json);
			this.setState({
				brewery: json.brewery,
			});
		});
	};

	render() {
		return this.state.brewery.length ? (
			<Brewery data={this.state.brewery} />
		) : (
			<h3>Loading . . .</h3>
		);
	}
}

export default BreweryList;
