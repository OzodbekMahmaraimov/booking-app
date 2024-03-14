import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
// import App from "./app";
// import ResPayMain from "./pages/app/homeRestaurant/restourantPayment/payMain";
// import { ProfileMain } from "./pages/app/profile/editProfile";
// import ResAdminSidebar from "./pages/app/admin/restourantAdmin/itemList/category/sidebar";
import ResMainItemList from "./pages/app/admin/restourantAdmin/itemList/mainItemList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<ResMainItemList />
	</BrowserRouter>
);