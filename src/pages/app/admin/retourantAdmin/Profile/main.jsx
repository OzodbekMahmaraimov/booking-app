import React from "react";
import { Right, Left } from "./category";

const RestaurantAdmin = () => {
	return (
		<div>
			<div className="bg-orange-500 items-start flex p-4 w-[100%] h-[100%]">
				<Left />
				<Right />
			</div>
		</div>
	);
};
export default RestaurantAdmin;
