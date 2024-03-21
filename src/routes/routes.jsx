import React from "react";
import { Route, Routes } from "react-router-dom";
// import Main from "../components/layout/main";
import IndexMain from "../pages/main-admin-page";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signUp";
// import { Costumer, OrderList } from "../pages/app/admin/restourantAdmin/category";
// import ItemList from "../pages/app/admin/restourantAdmin/category/list";
import MainOrder from "../pages/app/orderLandingPage/routes";
import { MainHotelDashboard } from "../pages/main-hotel-dashboard";
import HomeRestaurant from "./../pages/app/homeRestaurant/homeRestaurant";
import Hotelroutes from "../pages/main-hotel-page/routes";
// import AdminPayment from "../pages/app/admin/mainAdmin/payment";
// import ResPayMain from "../pages/app/homeRestaurant/restourantPayment/payMain";
// import { ResourantProfile } from "../pages/app/admin/retourantAdmin/Profile";
// import { ResProfileAnally } from "../pages/app/restourant/profile/analthy";
import RestourantAdmin from "../pages/app/admin/restourantAdmin/routes/routes";
import OrderLanding from "../pages/app/orderLandingPage";
// import AdminDashboard from "../pages/app/admin/restourantAdmin/category/dashboard";
// import MainAdminpage from "../pages/main-admin-page/component/mainAdminPage";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" Component={OrderLanding} />
				<Route path="/MainDashboardIndex" Component={IndexMain} />
				<Route path="/homerestourant" Component={HomeRestaurant} />
				<Route path="/loginSignUp" Component={Login} />
				<Route path="/signUp" Component={SignUp} />
			</Routes>

			<RestourantAdmin />
			<MainOrder />
			<Hotelroutes />
			<MainHotelDashboard />
		</>
	);
};

export default App;
