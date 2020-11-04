import React from "react";
import { Link } from "react-router-dom";

const BeerCard = (props) => {
	const { name, style, notes, rating, brewery, _id, breweryName } = props.beer;
	console.log(brewery);
	return (
		<>
			<div className="columns is-mobile is-multiline is-centered">
				<div className="column is-half">
					<div classname="box">
						<Link to={`/beers/${_id}`}>
							<div className="level">
								<div className="level-item has-text-centered">
									<h1 className="title is-centered">{name}</h1>
								</div>
							</div>
							<div>
								<ul>
									<li>{breweryName && `${breweryName}, `}</li>
									<li>{style}</li>
									<li>{notes}</li>
									<li>{rating}</li>
								</ul>
							</div>
						</Link>

						<Link
							className="button is-primary "
							to={`/beers/${_id}/edit`}
							style={{ color: "black" }}
						>
							Edit
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default BeerCard;
