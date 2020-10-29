import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
	return (
		<header>
			<div className="logo">
				<NavLink to="/">Beers!</NavLink>
			</div>
			<div className="links">
				<ul>
					<li>
						<NavLink to="/beers">All Beers</NavLink>
					</li>
					<li>
						<NavLink to="/beers/new">Add New Beer</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
