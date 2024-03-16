import React, { useEffect, useState } from "react";
import AdminDasheboard from "./dashboard";
import home from "../../../../../assets/img/Vector (1).png";
import line from "../../../../../assets/images/Line 10.png";
import { Dashboard } from ".";
import { MainDashboardManageRooms } from "../../../../main-hotel-dashboard/magage-rooms";
import AdminDashboard from "./dashboard";
import ResAdminSidebar from "../components/sidebar";
import axios from "axios";


   
export const Customer = () => {
	const [selectedItems, setSelectedItems] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customer, setCustomer] = useState(null);

	

	useEffect(() => {
        axios.get("http://localhost:3001/manager-dashboard")
            .then((res) => {
                setCustomer(res.data.customers);
				
                setCurrentPage(1); // Sahifani qayta boshlash
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

	const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

	

	const lastPageIndex = currentPage * itemsPerPage;
    const firstPageIndex = lastPageIndex - itemsPerPage;
    const currentItems = customer ? customer.slice(firstPageIndex, lastPageIndex) : [];

	

	

	
	
	return (
		<div className="w-full bg-[#F46A06]">
			<div className="flex">
				<ResAdminSidebar className="w-[30%]" />
				<div className="w-[75%]">
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
	);
};
export default Customer;
