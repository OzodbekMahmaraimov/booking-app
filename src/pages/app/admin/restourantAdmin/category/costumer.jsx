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
			<div className="w-[25%]">
				<ResAdminSidebar />
			</div>
			<div className="w-[75%]">
				<div>
					<div className=" mt-6 ml-4 bg-white rounded-xl border-[10px] border-white-600 px-1 py-4">
						<table className="mt-4 w-full ml-1 text-center rounded-lg">

							 <thead>
							 <tr className="border-2 w-full bg-[#F1E8D7] h-10 ">
							 <th>Customer ID</th>
								<th>Customer phone</th>
								<th>Customer Name</th>
								<th>Total Spent</th>
								<th>Last order</th>
								<th></th>
							</tr>
							</thead>
							<tbody>
							{currentItems.length > 0 ? (
                                    currentItems.map((item, i) => (
                                        <tr key={i} className="border-b border-gray-400">
                                            <td className="p-4">{item.id}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.name}</td>
                                            <td>{item.spend}</td>
                                            <td>{item.order}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="border-b border-gray-400">
                                        <td colSpan="6" className="font-bold text-lg py-3">
                                            No orders found
                                        </td>
                                    </tr>
                                )}
							</tbody>
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
							disabled={currentItems.length < itemsPerPage}
							className="bg-[#F46A06] m-1 hover:bg-white hover:text-black text-white hover:transition-all border-2 border-[#F46A06] py-2 px-3 rounded-md"
						>
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
