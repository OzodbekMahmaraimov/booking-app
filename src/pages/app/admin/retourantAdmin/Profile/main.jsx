import React from "react";
import { Right, Left } from "./category";
import ResAdminSidebar from "../../restourantAdmin/components/sidebar";

const RestaurantAdmin = () => {
	return (
		<div>
			<div className="bg-orange-500 flex">
				<div className="w-[25%]">
					<ResAdminSidebar />
				</div>
				<div className="w-[75%]">
					<Right />
				</div>
			</div>
		</div>
	);
};
export default RestaurantAdmin;
