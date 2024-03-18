import React, { useState } from "react";
import pencil from "../../../../assets/images/Component 42.png";
import vector from "../../../../assets/images/pay-img.png";
import late from "./../../../../assets/images/Latte 6 (1).png";

const RestaurantPayment = () => {
	const [currentFilter, setCurrentFilter] = useState("all");

	const orders = [
		{
			id: 1,
			status: "complete payment",
			title: "Americano coffee",
			count: "x2",
			allSea: "Canceled by the system order payment timeout",
			btn: "Complete",
			image: late,
		},
		{
			id: 2,
			status: "pending payment",
			title: "Americano coffee",
			count: "x2",
			allSea: "Payment pending",
			btn: "Cancel",
			image: late,
		},
		{
			id: 3,
			status: "pending payment",
			title: "Americano coffee",
			count: "x2",
			allSea: "Order payed successfully",
			btn: "Cancel",
			image: late,
		},
	];
	const filteredOrders = orders.filter((order) =>
		currentFilter === "all" ? true : order.status === currentFilter
	);

	const handleFilterChange = (filter) => {
		setCurrentFilter(filter);
	};

	const Card = ({ order }) => (
		<div className="mt-5 flex justify-between items-center bg-orange-200 rounded-lg shadow-md m-2 p-2">
			<div className="flex justify-between">
				<img src={order.image} alt={order.title} className="w-56 h-40 rounded mr-2" />
			</div>
			<div className="px-3">
				{currentFilter === "all" && (
					<div className="text-orange-500 font-bold mb-2">
						{order.status.replace(/_/g, " ").toUpperCase()}
					</div>
				)}
				<button className="w-full bg-orange-500 rounded text-white px-2 py-1 font-bold ml-2">
					{order.btn}
				</button>
				<div className="flex">
					<p className="font-bold text-2xl">{order.title}</p>
					<div className="text-2xl rounded p-1 text-orange-500 ml-2">{order.count}</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="flex flex-col">
			<div className="flex justify-end p-5">
				<h1 className="text-3xl">Byiringiro Moise</h1>
				<img className="w-10" src={pencil} alt="edit-pencil" />
			</div>
			<div className="flex flex-col items-center mt-40">
				<div className="w-40 h-40 absolute top-48">
					<img src={vector} alt="user-photo" />
				</div>
				<div className="border-2 w-11/12 border-black flex items-center flex-col mb-5">
					<p className="text-3xl text-slate-500 mt-20 mb-5">Orders and Payments</p>
					<div className="w-11/12 border-2 border-black flex items-center flex-col mb-10">
						<div className="flex justify-around w-full px-3">
							{/* Filter buttons */}
							{["all", "pending payment", "complete payment"].map((filter) => (
								<button
									key={filter}
									onClick={() => handleFilterChange(filter)}
									style={{ color: currentFilter === filter ? "orange" : "black" }}
								>
									<p className="text-3xl">{filter.charAt(0).toUpperCase() + filter.slice(1)}</p>
								</button>
							))}
						</div>
						<div>
							{filteredOrders.map((order) => (
								<Card key={order.id} order={order} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantPayment;
