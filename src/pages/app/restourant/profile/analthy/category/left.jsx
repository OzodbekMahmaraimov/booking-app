import React, { useState } from "react";
import logo from "../../../../../../assets/img/HFfinder.png";
import userIcon from "../../../../../../assets/img/Component 4.png";
import menuIcon1 from "../../../../../../assets/img/clarity_list-line.png";
import menuIcon2 from "../../../../../../assets/img/clarity_list-line (1).png";
import anally from "../../../../../../assets/img/logos_google-analytics.png";
import vector from "../../../../../../assets/img/Vector.png";
import Customers from "../../../../../../assets/img/raphael_customer.png";

const Left = () => {
	const [selectedMenu, setSelectedMenu] = useState(""); // State to track the selected menu

	const handleMenuClick = (menu) => {
		setSelectedMenu(menu);
	};
	return (
		<div className="w-[35%] h-[300px]">
			{/* top white piece */}
			<div className="bg-white px-4 py-3 items-center justify-center  rounded-xl">
				{/* logo */}
				<div className="flex items-center justify-center mt-8 mb-10">
					<img src={logo} alt="" />
				</div>
				{/* user data */}
				<div className="flex items-center gap-2">
					{/* user icon */}
					<div>
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
				<div className="flex flex-col gap-4 justify-start">
					{/* first */}
					<div
						className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer select-none ${
							selectedMenu === "Item List" ? "bg-orange-500" : ""
						}`}
						onClick={() => handleMenuClick("Item List")}
					>
						<img src={menuIcon1} alt="" />
						<p className="text-xl">Item List</p>
					</div>
					{/* second */}
					<div
						className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer select-none ${
							selectedMenu === "Order List" ? "bg-orange-500" : ""
						}`}
						onClick={() => handleMenuClick("Order List")}
					>
						<img src={menuIcon2} alt="" />
						<p className="text-xl">Order List</p>
					</div>
					{/* third */}
					<div
						className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer select-none ${
							selectedMenu === "Customers" ? "bg-orange-500" : ""
						}`}
						onClick={() => handleMenuClick("Customers")}
					>
						<img src={Customers} alt="" />
						<p className="text-xl">Customers</p>
					</div>
					{/* fourth */}
					<div
						className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer select-none ${
							selectedMenu === "Analytics" ? "bg-orange-500" : ""
						}`}
						onClick={() => handleMenuClick("Analytics")}
					>
						<img src={anally} alt="" />
						<p className="text-xl">Analytics</p>
					</div>
					{/* fifth */}
					<div
						className={`flex items-center mb-20 gap-2 p-2 rounded-xl cursor-pointer select-none ${
							selectedMenu === "My account" ? "bg-orange-500" : ""
						}`}
						onClick={() => handleMenuClick("My account")}
					>
						<img src={vector} alt="" />
						<p className="text-xl">My account</p>
					</div>
					{/* button logout */}
					<div className="mt-10 mb-10 flex items-center justify-center">
						<button className="py-3 px-7  text-white bg-orange-400 rounded-xl cursor-pointer flex items-center justify-center">
							Logout
						</button>
					</div>
					{/* Lents */}
					<div>
						<p>1@2022 All rights reserved</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Left;
