import React from "react";
import logo from "../../../../../../assets/img/HFfinder.png";
import userIcon from "../../../../../../assets/img/Component 4.png";
import anally from "../../../../../../assets/img/logos_google-analytics.png";
import vector from "../../../../../../assets/img/Vector.png";
import DashboardImg from "../../../../../../assets/img/Vector (3).png";
import HotelDesign from "../../../../../../assets/img/Vector (4).png";
import ManageRooms from "../../../../../../assets/img/Vector (5).png";
import SettingIcon from "../../../../../../assets/img/carbon_settings-services.png";

const Left = () => {
	return (
		<div className="w-[35%] h-[845px]">
			{/* top white piece */}
			<div className="bg-white px-4 py-3 h-[100%] rounded-xl">
				{/* logo */}
				<div className="flex items-center  justify-center mt-8 mb-10">
					<img src={logo} alt="" />
				</div>
				{/* user data */}
				<div className="flex items-center gap-2">
					{/* user icon */}
					<div className="bg-[#F46A06] rounded-[50%]">
						<img src={userIcon} alt="" />
					</div>
					{/* user name */}
					<div>
						<p className="font-bold text-2xl ">Byiringiro Moise</p>
						<div className="flex items-center gap-1">
							<div className="w-[20px] h-[10px] rounded-md bg-[#F46A06]"></div>
							<p className="text-[#00000099] text-sm">System Admin</p>
						</div>
					</div>
				</div>
				{/* menu category */}
				<div className="flex flex-col justify-start">
					{/* Dashboard */}
					<div className="flex items-center mt-10 mb-5  gap-3 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
						<img src={DashboardImg} alt="" />
						<p className="text-xl">Dashboard</p>
					</div>

					<div className="flex items-center mt-4 gap-3 mb-6 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
						<img src={HotelDesign} alt="" />
						<p className="text-xl">Hotel Design</p>
					</div>
					<div className="flex items-center mt-5 mb-5 gap-3 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
						<img src={ManageRooms} alt="" />
						<p className="text-xl">Manage Rooms </p>
					</div>
					{/* setting piece */}
					<div className="flex items-center mt-5 mb-5 gap-3 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
						<img src={SettingIcon} alt="" />
						<p className="text-xl">Manage services</p>
					</div>
				</div>
				{/* Manage Accounts */}
				<div className="flex items-center  mt-5 gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
					<img src={vector} alt="" />
					<p className="text-xl">My Profile</p>
				</div>
			</div>
		</div>
	);
};
export default Left;
