import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "./assets/style.css";
import { MainHotelDashboard } from "./pages/main-hotel-dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<ResMainItemList />
	</BrowserRouter>
);