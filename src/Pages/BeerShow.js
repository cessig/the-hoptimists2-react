import React from "react";
import BeerModel from "../Models/BeerModel";
import BeerCard from "../components/Beers/BeerCard";

class BeerShow extends React.Component {
	state = {
		beer: null,
	};

	componentDidMount() {
		this.fetchBeer();
	}

	fetchBeer = () => {
		BeerModel.show(this.props.match.params.id).then((json) => {
			this.setState({
				beer: json.beer,
			});
		});
	};

	render() {
		return this.state.beer ? (
			<BeerCard beer={this.state.beer} />
		) : (
			<h3>Loading...</h3>
		);
	}
}

export default BeerShow;
