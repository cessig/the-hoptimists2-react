import React from "react";
import BreweryModel from "../components/Brewery/Brewery";

class NewBrewery extends React.Component {
	state = {
		name: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();

		BreweryModel.create(this.state).then((json) => {
			this.props.history.push("/brewery");
		});
	};

	handleChange = (event) => {
		if (event.target.type !== "text") {
			this.setState((prevState) => ({
				completed: !prevState.completed,
			}));
		} else {
			this.setState({
				[event.target.name]: event.target.value,
			});
		}
	};

	render() {
		return (
			<div>
				<h2>New Brewery</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-input">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							onChange={this.handleChange}
							value={this.state.name}
						/>
					</div>

					<input type="submit" value="Add Brewery" />
				</form>
			</div>
		);
	}
}

export default NewBrewery;
