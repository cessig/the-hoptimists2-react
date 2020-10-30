import React from "react";
import BreweryModel from "../Models/BreweryModel";

class EditBrewery extends React.Component {
	state = {
		name: "",
	};

	componentDidMount() {
		this.fetchBrewery();
	}

	fetchBrewery = () => {
		BreweryModel.show(this.props.match.params.id).then((json) => {
			this.setState({
				...json.brewery,
				formTitle: json.brewery.title,
			});
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		BreweryModel.edit(this.props.match.params.id, this.state).then((json) => {
			this.props.history.push(`/brewery/${this.props.match.params.id}`);
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
				<h2>Edit {this.state.formTitle}</h2>
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

					<input type="submit" value="Update Brewery" />
				</form>
			</div>
		);
	}
}

export default EditBrewery;
