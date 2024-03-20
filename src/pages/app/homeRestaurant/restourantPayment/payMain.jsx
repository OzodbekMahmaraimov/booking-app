import React from "react";
import RestourantPayment from "./resPayment";
import Navbar from "../../orderLandingPage/navbar";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";


const navdata = [
	{ id: 1, icon: <FaHome color='black' />, name: 'Home', to: "/", isActive: false },
	{ id: 4, icon: <FiLogIn color='black' />, name: 'Restaurant', to: "/homerestourant", isActive: true },
	{ id: 5, icon: <FiLogIn color='black' />, name: 'hotel', to: "/hotel", isActive: false },
	{ id: 3, icon: <IoCall color='black' />, name: 'ContactUs', to: "", isActive: false },
	{ id: 7, icon: <FiLogIn color='black' />, name: 'Login', to: "loginSignUp", isActive: false }
  ]
function ResPayMain() {
	return (
		<div>
			      <Navbar navdata={navdata} />

			<RestourantPayment />
		</div>
	);
}

export default ResPayMain;
