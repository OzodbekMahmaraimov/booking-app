import React, { useEffect, useState } from "react";
import homeIcon from "./../../../../../assets/images/Vector (1).png";
import blackLine from "./../../../../../assets/images/Line 10.png";
import menuIcon from "./../../../../../assets/images/svg.svg";
import ResAdminSidebar from "../components/sidebar";
import axios from "axios";

const ItemList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;
	const [isLoading, setIsLoading] = useState(false); // State to manage loading status
	const [error, setError] = useState(null); // State to capture any error
	const [selectedItems, setSelectedItems] = useState({});
	const [items, setItems] = useState([]);
	const [allItems, setAllItems] = useState([]); // Barcha ma'lumotlar uchun yangi state
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		setIsLoading(true);
		axios
			.get("http://localhost:3000/admin/") // URLni o'zgartiring
			.then((res) => {
				const apiItems = res.data.restAdmin; // API javobiga moslashuv
				setAllItems(apiItems); // Barcha ma'lumotlarni saqlash
				setItems(apiItems); // Ko'rsatish uchun ma'lumotlarni saqlash
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("There was an error fetching the items: ", error);
				setError(error.message || "An error occurred");
				setIsLoading(false);
			});
	}, []);

	const handleSearch = (event) => {
		const searchTerm = event.target.value;
		setSearchTerm(searchTerm); // Qidiruv matnini yangilash
		if (!searchTerm) {
			setItems(allItems); // Agar qidiruv bo'sh bo'lsa, barcha ma'lumotlarni ko'rsatish
		} else {
			const filteredItems = allItems.filter(
				(item) =>
					item.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Mahsulot nomi bo'yicha filtrlash
					item.category.toLowerCase().includes(searchTerm.toLowerCase()) // Kategoriya bo'yicha filtrlash
			);
			setItems(filteredItems); // Filtrlangan natijalarni saqlash
		}
	};

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
	const deleteSelectedItems = () => {
		const remainingItems = items.filter((item) => !selectedItems[item.id]);
		setItems(remainingItems); // Yangilangan ro'yxatni state'ga saqlash
		localStorage.setItem("items", JSON.stringify(remainingItems)); // Yangilangan ro'yxatni localStorage'ga saqlash
		setSelectedItems({}); // Tanlangan elementlarni tozalash
	};

	const isAllSelected =
		currentItems.length > 0 && currentItems.every((item) => selectedItems[item.id]);

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};
	if (isLoading) {
		return <div>Loading...</div>; // Simple loading indicator
	}

	if (error) {
		return <div>Error: {error}</div>; // Display error message
	}

	return (
		<div className="flex bg-[#F46A06]">
			<div className="w-[25%]">
				<ResAdminSidebar />
			</div>
			<div className="w-[75%] py-3 px-4">
				<div className="flex  mt-5">
					<div className="flex w-full items-center gap-1">
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
							className="w-[500px] outline-none px-3 py-3 rounded-xl"
							placeholder="Search"
							value={searchTerm}
							onChange={handleSearch}
						/>
						<button className="px-4 py-2.5 text-white border-[2px] border-solid border-white rounded-xl">
							Search
						</button>
					</div>
				</div>
				<div className="w-full mt-5 h-[570px] rounded-xl bg-[#F1E8D7] p-2">
					<div className="bg-white w-full h-full rounded-xl">
						<div className="p-2">
							<button className="border-[#F46A06] hover:bg-[#F46A06] m-1 hover:text-white hover:transition-all border-2 py-2 px-3 rounded-md">
								Add new item
							</button>
							<button
								onClick={deleteSelectedItems}
								className="border-[#F46A06] hover:bg-[#F46A06] m-1 hover:text-white hover:transition-all border-2 py-2 px-3 rounded-md"
							>
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
											<td>#{item.id}</td>
											<td>{item.name}</td>
											<td>{item.category}</td>
											<td>{item.price}</td>
											<td>{item.quantity}</td>
											<td className="cursor-pointer">
												<img src={menuIcon} alt="menu icon" />
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						{/* Pagination controls */}
						<div id="btn-div" className="p-2">
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
		</div>
	);
};

export default ItemList;
