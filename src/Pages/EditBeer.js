import React from "react";
import BeerModel from "../Models/BeerModel";

class EditBeer extends React.Component {
	state = {
		name: "",
		style: "",
		notes: "",

		rating: "",
		completed: false,
		formTitle: "",
	};

	componentDidMount() {
		this.fetchBeer();
	}

	fetchBeer = () => {
		BeerModel.show(this.props.match.params.id).then((json) => {
			this.setState({
				...json.beer,
				formTitle: json.beer.title,
			});
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		BeerModel.edit(this.props.match.params.id, this.state).then((json) => {
			this.props.history.push(`/beers/${this.props.match.params.id}`);
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
					<div className="form-input">
						<label htmlFor="style">Style</label>
						<input
							type="text"
							name="style"
							onChange={this.handleChange}
							value={this.state.style}
						/>
					</div>
					<div className="form-input">
						<label htmlFor="notes">Notes</label>
						<input
							type="text"
							name="notes"
							onChange={this.handleChange}
							value={this.state.notes}
						/>
					</div>
					<div className="form-input">
						<label htmlFor="completed">Completed</label>
						<input
							type="checkbox"
							name="completed"
							onChange={this.handleChange}
							value={this.state.completed}
						/>
					</div>
					<input type="submit" value="Update Beer" />
				</form>
			</div>
		);
	}
}

export default EditBeer;
