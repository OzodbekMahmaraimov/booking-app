import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/style.css";
import { AdminPayment } from "./pages/app/admin/mainAdmin/payment";
import { HotelProfile } from "./pages/app/admin/retourantAdmin/Profile";
import { ResProfileAnally } from "./pages/app/restourant/profile/analthy";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<HotelProfile />
	</BrowserRouter>
);
