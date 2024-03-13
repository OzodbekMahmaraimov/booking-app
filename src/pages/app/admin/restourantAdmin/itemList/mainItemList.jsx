import React from "react";
import ResAdminSidebar from "./category/sidebar";
import ItemList from "./category/list";

const ResMainItemList = () => {
	return (
		<div className="bg-[#F46A06] w-full h-screen flex justify-between">
			<div className="w-[25%]">
				<ResAdminSidebar />
			</div>
			<div className="w-[75%]">
				<ItemList />
			</div>
		</div>
	);
};

export default ResMainItemList;
