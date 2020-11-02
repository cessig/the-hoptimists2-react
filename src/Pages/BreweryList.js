import React from "react";
import BreweryModel from "../Models/BreweryModel";
import Brewery from "../components/Brewery/BreweryList";

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

	addBrewery = () => {
		this.props.history.push("/brewery/new/");
	};

	render() {
		return this.state.brewery.length ? (
			<>
				<Brewery data={this.state.brewery} />
				<button className="button" onClick={this.addBrewery}>
					Add new Brewery!
				</button>
			</>
		) : (
			<h3>Loading . . .</h3>
		);
	}
}

export default BreweryList;
