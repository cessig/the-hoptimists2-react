import React from "react";
import BreweryCard from "../components/Brewery/Brewery";
import BreweryModel from "../Models/BreweryModel";

class BreweryShow extends React.Component {
	state = {
		Brewery: null,
	};

	componentDidMount() {
		this.fetchBrewery();
	}

	fetchBrewery = () => {
		BreweryModel.show(this.props.match.params.id).then((json) => {
			console.log(json);
			this.setState({
				Brewery: json.Brewery,
			});
		});
	};

	render() {
		return this.state.brewery ? (
			<BreweryCard brewery={this.state.brewery} />
		) : (
			<h3>Loading...</h3>
		);
	}
}

export default BreweryShow;
