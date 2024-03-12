import React from "react";
import logo from "../../../../../../assets/img/HFfinder.png";
import userIcon from "../../../../../../assets/img/Component 4.png";
import menuIcon1 from "../../../../../../assets/img/clarity_list-line.png";
import menuIcon2 from "../../../../../../assets/img/clarity_list-line (1).png";
import anally from "../../../../../../assets/img/logos_google-analytics.png";
import vector from "../../../../../../assets/img/Vector.png";

const Left = () => {
	return (
		<div>
			{/* top white piece */}
			<div className="bg-[#F46A06]">
				{/* logo */}
				<div>
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
				{/* menu category */}
				<div className="flex flex-col justify-start">
					{/* first */}
					<div>
						<img src={menuIcon1} alt="" />
					</div>
					<div>
						<img src={menuIcon2} alt="" />
					</div>
				</div>
			</div>
			{/* space */}
			<div>
				<p className="text-white text-xl">Facility Managers</p>
			</div>
			{/* bottom white piece */}
			<div className="bg-white border-">
				{/* line */}
				<div className="flex items-center gap-2">
					<img src={anally} alt="" />
					<p className="text-xl">Manage Payments</p>
				</div>
				{/* Manage Accounts */}
				<div className="flex items-center mt-16 mb-6 gap-2 hover:bg-[#ccc] hover:cursor-pointer select-none">
					<img src={vector} alt="" />
					<div className="flex flex-col">
						<p className="text-xl font-bold">Transportation Summary</p>
						<p className="text-sm">My Profile</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Left;
