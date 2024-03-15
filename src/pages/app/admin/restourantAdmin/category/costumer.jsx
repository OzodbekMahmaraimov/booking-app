import React, { useState } from "react";
import AdminDasheboard from "./dashboard";
import home from "../../../../../assets/img/Vector (1).png";
import line from "../../../../../assets/images/Line 10.png";
import { Dashboard } from ".";
import { MainDashboardManageRooms } from "../../../../main-hotel-dashboard/magage-rooms";
import AdminDashboard from "./dashboard";
import ResAdminSidebar from "../components/sidebar";


   
export const Customer = () => {
	const [selectedItems, setSelectedItems] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;
	const [isModalOpen, setIsModalOpen] = useState(false);

	

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
		{
			id: 6,
			phone: "+998907748674",
			name: "Byiringiro Moise",
			total: "6000Rwf",
			last: "3000Rwf",
			send: "...",
		},
		{
			id: 6,
			phone: "+998907748674",
			name: "Byiringiro Moise",
			total: "6000Rwf",
			last: "3000Rwf",
			send: "...",
		},
		{
			id: 7,
			phone: "+998907748674",
			name: "Byiringiro Moise",
			total: "6000Rwf",
			last: "3000Rwf",
			send: "...",
		},
	];

	

	const lastPageIndex = currentPage * itemsPerPage;
	const firstPageIndex = lastPageIndex - itemsPerPage;
	const currentItems = castTasble.slice(firstPageIndex, lastPageIndex);

	

	

	
	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};
	return (
		<div className="w-full bg-orange-400">
			<div className="flex">
<<<<<<< HEAD
				<ResAdminSidebar className="w-[25%]" />
				<div className="w-[70%]">
=======
				<ResAdminSidebar className="w-[30%]" />
				<div className="w-[75%]">
>>>>>>> 432661b6b54745e6f6f2721d1ea603cfb025c417
					<div className="flex ml-4 px-2">
						<img className="w-10 h-10 mt-20 ml-4" src={home} alt="" />
						<img className="w-5 h-12 mt-20 ml-2" src={line} alt="" />
						<h1 className="mt-[100px] ml-1 font-bold text-xl">Restaurant Manager Dashboard</h1>
						<div className="flex items-center"></div>
						<div className="flex flex-col-reverse w-1/4 ml-[200px]">
							<input className="rounded-full w-full h-8 border-2 border-white " type="text" />
						</div>
						<div className="flex flex-col-reverse ml-2 ">
							<button className="font-bold rounded-full border-4 border-white w-20">Search</button>
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
							{currentItems.map((item, i) => (
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
						<div className="p-2">
						<button
							onClick={ prevPage }
							disabled={currentPage === 1}
							className="bg-[#F46A06] m-1 hover:bg-white hover:text-black text-white hover:transition-all border-2 border-[#F46A06] py-2 px-3 rounded-md"
						>
							Previous
						</button>
						<button
							onClick={nextPage}
							disabled={currentPage >= Math.ceil(castTasble.length / itemsPerPage)}
							className="bg-[#F46A06] m-1 hover:bg-white hover:text-black text-white hover:transition-all border-2 border-[#F46A06] py-2 px-3 rounded-md"
						>
							Next
						</button>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Customer;
