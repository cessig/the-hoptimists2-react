import React from "react";
import BeerModel from "../Models/BeerModel";

class NewBeer extends React.Component {
	state = {
		name: "",
		style: "",
		notes: "",
		rating: "",
		completed: false,
	};

	handleSubmit = (event) => {
		event.preventDefault();

		BeerModel.create(this.state).then((json) => {
			this.props.history.push("/beers");
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
				<h2>New Beer</h2>
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
						<label htmlFor="Style">Style</label>
						<input
							type="text"
							name="style"
							onChange={this.handleChange}
							value={this.state.style}
						/>
					</div>
					<div className="form-input">
						<label htmlFor="Notes">Notes</label>
						<input
							type="text"
							name="notes"
							onChange={this.handleChange}
							value={this.state.notes}
						/>
					</div>
					<div className="form-input">
						<label htmlFor="Rating">Rating</label>
						<input
							type="text"
							name="rating"
							onChange={this.handleChange}
							value={this.state.rating}
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
					<input type="submit" value="Add Beer" />
				</form>
			</div>
		);
	}
}

export default NewBeer;
