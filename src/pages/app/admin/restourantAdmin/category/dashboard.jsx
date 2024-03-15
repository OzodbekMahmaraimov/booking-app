import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../../../../assets/images/Component 5.png";
import logo from "../../../../../assets/images/HFfinder.png";
import itemList from "../../../../../assets/images/clarity_list-line.png";
import orderList from "../../../../../assets/images/clarity_list-line (1).png";
import customers from "../../../../../assets/images/raphael_customer.png";
import analytics from "../../../../../assets/images/logos_google-analytics.png";
import account from "../../../../../assets/images/Vector.png";
import Customer from "./costumer";
import Order_LIst from "./orderList";
// Importing OrderList and Customer components seems unnecessary unless used within this component.

const AdminDashboard = ({ activeClass, activeClassCus }) => {
	return (
		<>
			<div className="bg-white px-8 py-2 rounded-tl-xl rounded-tr-xl mt-4 ml-2 w-1/4">
				<div className="flex items-center justify-center mt-8 mb-10">
					<img src={logo} alt="Logo" />
				</div>

				<div className="flex items-center gap-2">
					<img src={userIcon} alt="User Icon" />
					<div>
						<p className="font-bold text-2xl">Byiringiro Moise</p>
						<div className="flex items-center gap-1">
							<div className="w-[20px] h-[10px] rounded-md bg-[#F46A06]"></div>
							<p className="text-[#00000099] text-sm">System Admin</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-start mt-20">
					<div className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
						<img src={itemList} alt="Item List" />
						<h1 className="font-bold text-l ml-3">Item list</h1>
					</div>
					<Link to="/orderlist">
						<div
							className={`${activeClass} flex items-center gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none`}
						>
							<img src={orderList} alt="Order List" />
							<h1 className="font-bold text-l ml-3">Order list</h1>
						</div>
					</Link>
					<Link to="/customer">
						<div
							className={`${activeClassCus} flex items-center gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none`}
						>
							<img src={customers} alt="Customers" />
							<p className="text-l font-bold ml-2">Customers</p>
						</div>
					</Link>
					<div className="flex items-center mb-6 gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
						<img src={analytics} alt="Analytics" />
						<p className="text-l font-bold ml-5">Analytics</p>
					</div>
					<div className="flex items-center mb-6 gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
						<img src={account} alt="Account" />
						<p className="text-l font-bold ml-5">Account</p>
					</div>
				</div>

				<div className="mt-20 ml-10">
					<button className="bg-orange-500 w-3/4 h-12 rounded-xl text-white font-bold">
						Logout
					</button>
				</div>
				<div className="mt-10">
					<h1>@B.Moise All rights reserved</h1>
				</div>
			</div>
		</>
	);
};

export default AdminDashboard;
