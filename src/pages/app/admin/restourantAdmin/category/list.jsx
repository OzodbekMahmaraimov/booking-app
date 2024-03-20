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


const ItemList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [items, setItems] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [selectedItems, setSelectedItem] = useState(0);
	const [item, setItem] = useState([]);
	const [itemid, setItemid] = useState(0);


	const handleAddItem = () => {
		setShowModal(true); // Modalni ko'rsatish
	};

	const handleCloseModal = () => {
		setShowModal(false); // Modalni yopish
	};



	useEffect(() => {
		fetchData();
	}, []);


	// ----- ******* get data ******* ----- //
	const fetchData = async () => {
		try {
			const response = await axios.get(apiUrl + "admin/");
			const apiItems = response.data;
			setItems(apiItems);
			setItemid(apiItems.length);
		} catch (error) {
			setError("An error occurred while fetching the items.");
		} finally {
			setIsLoading(false);
		}
	};

	// ------ ******** delet items ******* ------ //
	const handleDeleteSelectedItems = () => {

		if (selectedItems > 0) {
			axios.delete(`${apiUrl}admin/${selectedItems}`,)
				.then((response) => {
					console.log('Serverdan qaytgan javob:', response.data);
				})
				.catch((error) => {
					console.error('Xatolik yuz berdi:', error);
				});
		} else {
			alert('Please select an item to delete.');
		}
	};
	// ------ ******** delet items ******* ------ //

	// ------ ******** select items ******* ------ //
	const toggleSelectItem = (id) => {
		if (selectedItems === id) {
			setSelectedItem(null);
		} else {
			setSelectedItem(id);
		}
	};
	// ------ ******** select items ******* ------ //







	// ------ ****** pagination ****** -------- //
	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
	// ------ ****** pagination ****** -------- //

	// ------- ******* addItem ******* ------- //

	const addItem = (data) => {
		console.log(data);
		axios.post(`${apiUrl}admin/`, data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error('Xatolik yuz berdi:', error);
			});
	};


	return (
		<div className="flex bg-[#F46A06] h-max">
			<div className="w-[25%]">
				<ResAdminSidebar />
			</div>
			<div className="w-[75%] py-3 px-4 h-max">
				<div className="flex  mt-5 h-max">
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
							{items.length > 0 ? (
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
										{items.map((item, key) => (
											<tr key={item.id} className="text-left">
												<td>
													<input
														name="check"
														type="checkbox"
														checked={selectedItems === item.id}
														onChange={() => toggleSelectItem(item.id)}
													/>
												</td>
												<td>#{key + 1}</td>
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
							) : searchTerm.length > 0 ? (
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
		</div>
	);
};

export default ItemList;