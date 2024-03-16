import React from "react";
import home from "../../../../../assets/images/Vector (1).png";
import line from "../../../../../assets/images/Line 10.png";
import AdminDashboard from "./dashboard";
import ResAdminSidebar from "../components/sidebar";

const navData = [
	{ id: 1, name: "All Orders" },
	{ id: 2, name: "New order" },
	{ id: 3, name: "On Progress" },
	{ id: 4, name: "Canceled Orders" },
	{ id: 5, name: "Complete orders" },
];
const tableData = [
	{
		id: 1,
		time: "08:30:12",
		date: "2022-04-20",
		name: "Moise Byiringiro",
		active: "Yes",
		status: "Pending",
	},
	{
		id: 2,
		time: "08:30:12",
		date: "2022-04-20",
		name: "Moise Byiringiro",
		active: "Yes",
		status: "Pending",
	},
	{
		id: 3,
		time: "08:30:12",
		date: "2022-04-20",
		name: "Moise Byiringiro",
		active: "Yes",
		status: "Pending",
	},
	{
		id: 4,
		time: "08:30:12",
		date: "2022-04-20",
		name: "Moise Byiringiro",
		active: "Yes",
		status: "Pending",
	},
	{
		id: 5,
		time: "08:30:12",
		date: "2022-04-20",
		name: "Moise Byiringiro",
		active: "Yes",
		status: "Pending",
	},
	{
		id: 6,
		time: "08:30:12",
		date: "2022-04-20",
		name: "Moise Byiringiro",
		active: "Yes",
		status: "Pending",
	},
];

const Order_LIst = () => {
	return (
		<div className="w-full">
			<div className="flex w-full bg-[#F46A06]">
				<ResAdminSidebar className="w-[25%]" />
				<div className="w-[75%]">
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

					<div className=" mt-6 ml-4 bg-white rounded-xl border-[10px] border-white-600 px-2 py-2">
						{navData.map((item, i) => (
							<button key={item.id} className="border-2 border-orange-500 px-3 py-1 rounded-lg m-3">
								{item.name}
							</button>
						))}

						<table className="mt-4 w-full ml-1 text-center rounded-lg">
							<tr className="border-2 w-full bg-[#F1E8D7] h-10 ">
								<th>OrderId</th>
								<th>Pick Up Time</th>
								<th>Pick Up Date</th>
								<th>Customer Name</th>
								<th>Ordered</th>
								<th>Payment Status</th>
							</tr>

							{tableData.map((item, i) => (
								<tr className="border-b border-gray-400">
									<td className="p-4" key={item.id}>
										{item.id}
									</td>
									<td>{item.time}</td>
									<td>{item.date}</td>
									<td>{item.name}</td>
									<td>{item.active}</td>
									<td className="text-orange-500 font-bold">{item.status}</td>
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
	);
};

export default Order_LIst;
