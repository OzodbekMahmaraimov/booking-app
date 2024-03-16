import React, { useEffect, useState } from "react";
import home from "../../../../../assets/images/Vector (1).png";
import line from "../../../../../assets/images/Line 10.png";
import AdminDashboard from "./dashboard";
import ResAdminSidebar from "../components/sidebar";
import axios from "axios";

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
        axios.get("http://localhost:3005/manager-dashboard")
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
        <div className="w-full">
            <div className="flex  w-full bg-orange-400">
                <ResAdminSidebar className="w-[25%]" />
                <div className="w-[70%]">
                    <div className="flex ml-4 w-full">
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

                    <div className=" mt-6 ml-4 bg-white rounded-xl border-[10px] border-white-600 px-2 py-2">
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
    );
};

export default Order_LIst;
