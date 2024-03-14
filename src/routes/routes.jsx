import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { App } from "../pages";

const Router = (props) => {
	return (
		<div>
			<Switch>
				<Route index path="/about" element={<App.AdminD />} />
			</Switch>
		</div>
	);
};

export default Router;
