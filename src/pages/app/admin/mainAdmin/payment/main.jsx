import React from "react";
import { Right, Left } from "./category";
import ResAdminSidebar from "../../restourantAdmin/components/sidebar";

const MainAdmin = () => {
	return (
		<div>
			<div className="bg-[#F46A06] flex">
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
export default MainAdmin;
