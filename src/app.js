import React from "react";
import Main from "./components/layout/main";
import { Route, Routes } from "react-router-dom";
// import HomeRestaurant from "./components/layout/homeRestaurant/homeRestaurant";
import OrderLanding from "./pages/app/orderLandingPage";
import Login from "./pages/auth/login";

const App = () => {
	return (
		<Routes>
			<Route path="/" Component={Main} />
			{/* <Route path="/home" Component={HomeRestaurant} /> */}
			<Route path="/order-landing page" Component={OrderLanding} />
			<Route path="/loginSignUp" Component={Login} />
		</Routes>
	);
};

export default App;
