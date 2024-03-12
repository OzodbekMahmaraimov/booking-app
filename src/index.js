import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import App from "./app";
// import Main from "./components/layout/main";
import PayMain from "./pages/app/homeRestaurant/restourantPayment/payMain";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<PayMain />
	</BrowserRouter>
);
