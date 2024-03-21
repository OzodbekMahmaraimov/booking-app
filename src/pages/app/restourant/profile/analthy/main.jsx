import React from "react";
import { Right, Left } from "./category";
import ResAdminSidebar from "../../../admin/restourantAdmin/components/sidebar";

const Anality = () => {
	return (
		<div>
			<div className="bg-orange-500 flex h-max pb-5">
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
export default Anality;
