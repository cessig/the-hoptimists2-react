import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import BeerList from "../Pages/BeerList";
import BeerShow from "../Pages/BeerShow";
import NewBeer from "../Pages/NewBeer";
import EditBeer from "../Pages/EditBeer";
import NewBrewery from "../Pages/NewBrewery";
import BreweryShow from "../Pages/BreweryShow.js";
import BreweryList from "../Pages/BreweryList";
import EditBrewery from "../Pages/EditBrewery";

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/beers/new" component={NewBeer} />
			<Route path="/beers/:id/edit" component={EditBeer} />
			<Route path="/beers/:id" component={BeerShow} />
			<Route path="/beers" component={BeerList} />
			<Route path="/brewery/new" component={NewBrewery} />
			<Route path="/brewery/:id" component={BreweryShow} />
			<Route path="/brewery" component={BreweryList} />
			<Route path="/brewery/:id/edit" component={EditBrewery} />
		</Switch>
	);
};

export default Routes;
