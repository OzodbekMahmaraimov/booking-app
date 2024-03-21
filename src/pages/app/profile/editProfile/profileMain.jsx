
import Navbar from "../../orderLandingPage/navbar";
import ProfileEdit from "./ProfileEdit";
import { FaHome } from "react-icons/fa";
import {IoRestaurant, IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { RiHotelFill } from "react-icons/ri";


const navdata = [
	{ id: 1, icon: <FaHome color='black' />, name: 'Home', to: "/" },
	{ id: 4, icon: <IoRestaurant  color='black' />, name: 'Restaurant', to: "/homerestourant" },
	{ id: 5, icon: <RiHotelFill color='black' />, name: 'hotel', to: "/hotel" },
	{ id: 3, icon: <IoCall color='black' />, name: 'ContactUs', to: "" },
	{ id: 7, icon: <FiLogIn color='black' />, name: 'Login', to: "/loginSignUp" }
  ]

const ProfileMain = () => {
	return (
		<div>
			      <Navbar navdata={navdata} />

			<ProfileEdit />
		</div>
	);
};

export default ProfileMain;
