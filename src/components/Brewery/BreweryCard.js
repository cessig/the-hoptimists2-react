import React from "react";
import { Link } from "react-router-dom";

const BreweryCard = (props) => {
	const { name, beers, _id } = props.brewery;
	return (
		<>
			<Link to={`/brewery/${_id}`}>
				<div className="brewery-card is box">
					<div className="image-wrapper"></div>
					<h3>{name}</h3>
					<ul>
						{beers.length &&
							beers.map((beer) => {
								return (
									<div className="content is-large">
										<ul type="1">
											<li key={beer._id}>
												<a>{beer.name}</a>
											</li>
										</ul>
									</div>
								);
							})}
					</ul>
				</div>
			</Link>
			<Link to={`/brewery/${_id}/edit`} style={{ color: "black" }}>
				Edit
			</Link>
		</>
	);
};

export default BreweryCard;
