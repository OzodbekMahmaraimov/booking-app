import React, { useState } from "react";
import homeIcon from "./../../../../../../assets/images/Vector (1).png";
import blackLine from "./../../../../../../assets/images/Line 10.png";
import menuIcon from "./../../../../../../assets/images/svg.svg";
import ResAdminSidebar from "../../resAdminSidebar/sidebar";

const ItemList = () => {
	const [selectedItems, setSelectedItems] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const items = [
		{ id: "#1", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#2", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#3", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#4", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#5", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#6", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#7", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#8", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#9", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#10", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#11", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#12", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#13", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#14", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#15", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#16", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#17", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#18", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#19", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
		{ id: "#20", name: "Cappuccino(iced)", category: "Coffee", price: "2500.00RWF", quantity: 20 },
	];

	const lastPageIndex = currentPage * itemsPerPage;
	const firstPageIndex = lastPageIndex - itemsPerPage;
	const currentItems = items.slice(firstPageIndex, lastPageIndex);

	const toggleSelectAll = (e) => {
		const newSelectedItems = {};
		if (e.target.checked) {
			currentItems.forEach((item) => {
				newSelectedItems[item.id] = true;
			});
		}
		setSelectedItems(newSelectedItems);
	};

	const toggleSelectItem = (id) => {
		setSelectedItems((prevItems) => ({
			...prevItems,
			[id]: !prevItems[id],
		}));
	};

	const isAllSelected =
		currentItems.length > 0 && currentItems.every((item) => selectedItems[item.id]);

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	return (
		<div>
			<div className="flex items-center justify-between py-3 px-4 mt-5 ">
				<ResAdminSidebar className="w-[25%]" />
				<div className="flex  gap-1 ">
					<div>
						<img src={homeIcon} alt="home icon" />
					</div>
					<div>
						<img src={blackLine} alt="separator line" />
					</div>
					<div>
						<p className="text-black cursor-pointer text-xl">Home</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<input
						type="text"
						className="w-[500px] text-orange-500 outline-none px-3 py-3 rounded-xl"
						placeholder="Search"
					/>
					<button className="px-4 py-2.5 text-white border-[2px] border-solid border-white rounded-xl">
						Search
					</button>
				</div>
			</div>
			<div className="w-[75%] h-[570px] rounded-xl bg-[#F1E8D7] p-2 flex">
				<div className="bg-white w-[100%] h-full rounded-xl">
					<div className="p-2">
						<button className="border-[#F46A06] hover:bg-[#F46A06] m-1 hover:text-white hover:transition-all border-2 py-2 px-3 rounded-md">
							Add new item
						</button>
						<button className="border-[#F46A06] hover:bg-[#F46A06] m-1 hover:text-white hover:transition-all border-2 py-2 px-3 rounded-md">
							Delete selected items
						</button>
					</div>
					<div className="p-2">
						<table className="w-full ">
							<thead>
								<tr className="bg-[#F1E8D7] text-left h-10 rounded-xl">
									<th>
										<input type="checkbox" checked={isAllSelected} onChange={toggleSelectAll} />
									</th>
									<th>Item ID</th>
									<th>Item Name</th>
									<th>Item category</th>
									<th>Item price</th>
									<th>Item quantity</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{currentItems.map((item) => (
									<tr key={item.id} className="text-left">
										<td>
											<input
												type="checkbox"
												checked={!!selectedItems[item.id]}
												onChange={() => toggleSelectItem(item.id)}
											/>
										</td>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td>{item.category}</td>
										<td>{item.price}</td>
										<td>{item.quantity}</td>
										<td className="cursor-pointer">
											<img src={menuIcon} alt="menu icon" onClick={openModal} />
											{/* Agar modal ochiq bo'lsa uni ko'rsatish */}
											{isModalOpen && (
												<div className="modal fixed top-0 left-0 w-[50%] h-[80%] bg-white flex justify-center items-center">
													{/* Modal mazmunini bu yerga qo'shing */}
													{/* Modalni yopish uchun tugma yoki boshqa element qo'shing */}
													<button onClick={closeModal}>Close Modal</button>
												</div>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{/* Pagination controls */}
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
							disabled={currentPage >= Math.ceil(items.length / itemsPerPage)}
							className="bg-[#F46A06] m-1 hover:bg-white hover:text-black text-white hover:transition-all border-2 border-[#F46A06] py-2 px-3 rounded-md"
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemList;
