import React, { useEffect, useState } from "react";
import home from "../../../../../assets/images/Vector (1).png";
import line from "../../../../../assets/images/Line 10.png";
import AdminDashboard from "./dashboard";
import ResAdminSidebar from "../components/sidebar";
import axios from "axios";
import { MainDashboardNavigation } from "../../../../main-hotel-dashboard/components/navigation";

const Order_LIst = () => {
    const [selectedItems, setSelectedItems] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [order, setOrder] = useState(null);

    const navData = [
        { id: 1, name: "All Orders" },
        { id: 2, name: "New order" },
        { id: 3, name: "On Progress" },
        { id: 4, name: "Canceled Orders" },
        { id: 5, name: "Complete orders" },
    ];

    useEffect(() => {
        axios.get("http://localhost:3000/manager-dashboard")
            .then((res) => {
                setOrder(res.data.orderlist);
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
    const currentItems = order ? order.slice(firstPageIndex, lastPageIndex) : [];

    return (
        <div className="w-full ">
            <div className="flex w-full h-screen bg-[#F46A06]">
                <div className="w-[25%]">
                    <ResAdminSidebar />
                </div>
                <div className="w-[75%] p-5">
                    <div>
                        <div className="flex  justify-between">
                            <MainDashboardNavigation />
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

                        <div className=" bg-white rounded-xl border-[10px] border-white-600 mt-5">
                            {navData.map((item, i) => (
                                <button key={item.id} className="border-2 border-orange-500 px-3 py-1 rounded-lg m-3">
                                    {item.name}
                                </button>
                            ))}

                            <table className="mt-4 w-full ml-1 text-center rounded-lg">
                                <thead>
                                    <tr className="border-2 w-full bg-[#F1E8D7] h-10 ">
                                        <th>OrderId</th>
                                        <th>Pick Up Time</th>
                                        <th>Pick Up Date</th>
                                        <th>Customer Name</th>
                                        <th>Ordered</th>
                                        <th>Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.length > 0 ? (
                                        currentItems.map((item, i) => (
                                            <tr key={i} className="border-b border-gray-400">
                                                <td className="p-4">{item.orderId}</td>
                                                <td>{item.time}</td>
                                                <td>{item.date}</td>
                                                <td>{item.name}</td>
                                                <td>{item.ordered}</td>
                                                <td className="text-orange-500 font-bold">{item.status}</td>
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
                                    onClick={prevPage}
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

export default Order_LIst;
