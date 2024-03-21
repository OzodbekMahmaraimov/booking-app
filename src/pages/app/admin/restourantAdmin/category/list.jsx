import React, { useEffect, useState } from "react";
// ----- ****** images ******* ------ //
import homeIcon from "./../../../../../assets/images/Vector (1).png";
import blackLine from "./../../../../../assets/images/Line 10.png";
import menuIcon from "./../../../../../assets/images/svg.svg";
import notFound from "./../../../../../assets/images/200w.gif";

import ResAdminSidebar from "../components/sidebar";
import axios from "axios";
import ItemListNew from "../components/modal";

import { apiUrl } from "../../../../../Api";
import { MainDashboardNavigation } from "../../../../main-hotel-dashboard/components/navigation";


const ItemList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [items, setItems] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedItems, setSelectedItem] = useState(0);
	const [itemid, setItemid] = useState(0);
	const [searchItem, setSearchItem] = useState("")
	// const [filteredItems, setFilteredItems] = useState([]); // Filtrlanadi yoki qidirilgan elementlar uchun state

	// ---- ****** modal ******* ------ //
	const handleAddItem = () => {
		setShowModal(true); // Modalni ko'rsatish
	};

	const handleCloseModal = () => {
		setShowModal(false); // Modalni yopish
	};
	// ---- ****** modal ******* ------ //


	useEffect(() => {
		fetchData();
	}, []);
	// ----- ******* get data ******* ----- //
	const fetchData = async () => {
		try {
			const response = await axios.get(apiUrl + "itemlist/");
			const apiItems = response.data;
			setItems(apiItems);
			setItemid(apiItems.length);
		} catch (error) {
			console.error("An error occurred while fetching the items." + error);
		}
	};
	// ----- ******* get data ******* ----- //




	// ------ ******** delete items ******* ------ //
	const handleDeleteSelectedItems = () => {

		if (selectedItems > 0) {
			axios.delete(`${apiUrl}itemlist/${selectedItems}`,)
				.then((response) => {
					console.log(selectedItems)
					console.log('Serverdan qaytgan javob:', response.data);
				})
				.catch((error) => {
					console.error('Xatolik yuz berdi:', error);
				});
		} else {
			alert('Please select an item to delete.');
		}
	};
	// ------ ******** delete items ******* ------ //


	// ------ ******** select items ******* ------ //
	const toggleSelectItem = (id) => {
		if (selectedItems === id) {
			setSelectedItem(null);
		} else {
			setSelectedItem(id);
		}
	};
	// ------ ******** select items ******* ------ //


	// ------- ******* addItem ******* ------- //

	const addItem = (data) => {
		console.log(data);
		axios.post(`${apiUrl}itemlist/`, data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error('Xatolik yuz berdi:', error);
			});
	};

	// ------- ******* addItem ******* ------- //

	// ------- ******* pagination ******* ------- //
	const itemsPerPage = 5;
	const lastItemIndex = currentPage * itemsPerPage;
	const firstItemIndex = lastItemIndex - itemsPerPage;
	const currentItems = items.slice(firstItemIndex, lastItemIndex);

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	// ------- ******* pagination ******* ------- //

	// ------- ******* filterItem ******* ------- //

	const filteredItems = searchItem.length > 0
		? items.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()))
		: currentItems;

	// ------- ******* filterItem ******* ------- //

	// ------- ******* searchItem ******* ------- //

	const handleSearch = (e) => {
		setSearchItem(e.target.value);
		setCurrentPage(1); // Qidiruv boshlanganda sahifani qayta birinchi sahifaga o'rnatish
	};
	// ------- ******* searchItem ******* ------- //

	return (
		<div className="flex bg-[#F46A06] h-max">
			<div className="w-[25%]">
				<ResAdminSidebar />
			</div>
			<div className="w-[75%] h-max">
				<div className="flex  mt-5 h-max justify-between">
					<MainDashboardNavigation />
					<div className="flex items-center gap-2">
						<input
							type="text"
							className="w-[500px] outline-none px-3 py-3 rounded-xl"
							placeholder="Search"
							onChange={handleSearch}
						/>
						<button className="px-4 py-2.5  text-white border-[2px] border-solid border-white rounded-xl">
							Search
						</button>
					</div>
				</div>
				<div className="w-full mt-5 h-max rounded-xl bg-[#F1E8D7] p-2">
					<div className="bg-white w-full h-full rounded-xl">
						<div className="p-2">
							<button onClick={handleAddItem} className="border-[#F46A06] hover:bg-[#F46A06] m-1 hover:text-white hover:transition-all border-2 py-2 px-3 rounded-md">
								Add new item
							</button>
							{showModal && <ItemListNew closeModal={handleCloseModal} addItem={addItem} />}
							<button
								onClick={handleDeleteSelectedItems}

								className="border-[#F46A06] hover:bg-[#F46A06] m-1 hover:text-white hover:transition-all border-2 py-2 px-3 rounded-md"
							>
								Delete selected items
							</button>
						</div>
						<div className="p-2">
							{filteredItems.length > 0 ? (
								<table className="w-full ">
									<thead>
										<tr className="bg-[#F1E8D7] text-left h-10 rounded-xl">
											<th>
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
										{filteredItems.length > 0 && filteredItems.map((item, index) => ( // Bu yerda `items` o'rniga `filteredItems`dan foydalanish
											<tr index={item.id} className="text-left">
												<td>
													<input
														name="check"
														type="checkbox"
														checked={selectedItems === item.id}
														onChange={() => toggleSelectItem(item.id)}
													/>
												</td>
												<td>{`#${firstItemIndex + index + 1}`}</td>
												<td>{item.name}</td>
												<td>{item.category}</td>
												<td>{item.price}</td>
												<td>{item.quantity}</td>
												<td>
													<img className="cursor-pointer" src={menuIcon} alt="menu icon" />
												</td>
											</tr>
										))}
									</tbody>
								</table>
							) : searchItem.length > 0 ? (
								<div className="flex justify-center items-center">
									<img src={notFound} alt="" />
								</div>
							) : null}
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
		</div >
	);
};

export default ItemList;