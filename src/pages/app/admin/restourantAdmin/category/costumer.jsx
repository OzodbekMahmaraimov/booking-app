import React from "react";
import AdminDasheboard from "./dashboard";
import home from "../../../../../assets/img/Vector (1).png";
import line from "../../../../../assets/images/Line 10.png";
import { Dashboard } from ".";
import { MainDashboardManageRooms } from "../../../../main-hotel-dashboard/magage-rooms";
import AdminDashboard from "./dashboard";
import ResAdminSidebar from "../components/sidebar";

const castTasble = [
	{
		id: 1,
		phone: "+998907748674",
		name: "Byiringiro Moise",
		total: "6000Rwf",
		last: "3000Rwf",
		send: "...",
	},
	{
		id: 2,
		phone: "+998907748674",
		name: "Byiringiro Moise",
		total: "6000Rwf",
		last: "3000Rwf",
		send: "...",
	},
	{
		id: 3,
		phone: "+998907748674",
		name: "Byiringiro Moise",
		total: "6000Rwf",
		last: "3000Rwf",
		send: "...",
	},
	{
		id: 4,
		phone: "+998907748674",
		name: "Byiringiro Moise",
		total: "6000Rwf",
		last: "3000Rwf",
		send: "...",
	},
	{
		id: 5,
		phone: "+998907748674",
		name: "Byiringiro Moise",
		total: "6000Rwf",
		last: "3000Rwf",
		send: "...",
	},
];
export const Customer = () => {
	return (
		<div className="w-full bg-[#F46A06]">
			<div className="flex">
				<div className="w-[25%]">
					<ResAdminSidebar />
				</div>
				<div className="w-[75%] p-2">
					<div className="w-full">
						<div className="flex mt-10">
							<div className="flex w-full items-center gap-1">
								<div>
									<img src={home} alt="home icon" />
								</div>
								<div>
									<img src={line} alt="separator line" />
								</div>
								<div>
									<p className="text-black cursor-pointer text-xl">Home</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<input
									type="text"
									className="w-[500px] outline-none px-3 py-3 rounded-xl"
									placeholder="Search"
									// onChange={handleSearchChange}
								/>
								<button className="px-4 py-2.5  text-white border-[2px] border-solid border-white rounded-xl">
									Search
								</button>
							</div>
						</div>

						<div className=" mt-6 ml-4 bg-white rounded-xl border-[10px] border-white-600 px-1 py-4">
							<table className="mt-4 w-full ml-1 text-center rounded-lg">
								<tr className="border-2 w-full bg-[#F1E8D7] h-10 ">
									<th>Customer ID</th>
									<th>Customer phone</th>
									<th>Customer Name</th>
									<th>Total Spent</th>
									<th>Last order</th>
									<th></th>
								</tr>
								{castTasble.map((item, i) => (
									<tr key={item.id}>
										<td className="p-4">{item.id}</td>
										<td>{item.phone}</td>
										<td>{item.name}</td>
										<td>{item.total}</td>
										<td>{item.last}</td>
										<td>{item.send}</td>
									</tr>
								))}
							</table>
							<div className="py-3">
								<button className="bg-orange-500 rounded-md w-32 h-10 text-white font-bold">
									Previous
								</button>
								<button className="bg-orange-500 rounded-md w-32 h-10 text-white font-bold ml-2">
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Customer;
