import React, { useEffect, useState } from "react";
import MaindashboardSidebar from "../components/sitebar";
import { MainDashboardNavigation } from "../components/navigation";
import { byId } from "../components/api";
import axios from "axios";
import MainHotelDashboardButton from "../components/button";
// import MainHotelDashboardButton from '../components/button';

const HotelDashboardManageServises = () => {
	const [roomData, setRoomData] = useState({});
	const [allservises, setallservises] = useState([]);
	const [newservesec, setnewservesec] = useState([]);
	const [allservisessize, setallservisessize] = useState(0);
	const [servesid, setservesid] = useState(null);

	useEffect(() => {
		Serviceshoteloffers()
	}, [])

	function Serviceshoteloffers() {
		axios.get('http://localhost:3000/hotel-manage/')
			.then((res) => {
				setRoomData(res.data);
				setallservises(res.data['Services-hotel-offers']);
				setallservisessize(res.data['Services-hotel-offers'].length);
			}).catch((err) => {
				console.error(err)
			})
	}

	const addservises = () => {

		const hoteladdress = byId('hotel-address').value;

		if (hoteladdress) {
			const formData = new FormData();
			formData.append('id', allservisessize + 1);
			formData.append('name', hoteladdress);

			const object = {};

			for (let [key, value] of formData.entries()) {
				object[key] = value;
			}
			allservises.push(object);

			axios.put('http://localhost:3000/hotel-manage', roomData)
				.then((response) => {
					console.log('Room added:', response.data);
					Serviceshoteloffers();
				})
				.catch((error) => {
					console.error('Error adding new room:', error);
				});

		} else {
			console.error('Please fill in all fields.');
		}
	}

	///// ------ ******* delete hotel offers ************************ //


	function deleteservise() {
		if (servesid !== null && servesid !== undefined) { // Aniqlik kiritish
			setnewservesec(allservises.filter(item => item.id !== servesid))

			console.log(newservesec);

			roomData['Services-hotel-offers'] = newservesec;

			console.log(roomData['Services-hotel-offers'] = newservesec);
			if (newservesec.length > 0) {
				axios.put('http://localhost:3000/hotel-manage', roomData)
					.then((response) => {
						console.log('Room added:', response.data);
						Serviceshoteloffers();
					})
					.catch((error) => {
						console.error('Error adding new room:', error);
					});
			} else {
				alert('please select one serveses again');
			}
		} else {
			alert('Please select a hotel offer to delete.');
		}

	}
	return (
		<section className='w-full h-max bg-orange-500 p-5 grid gap-5 grid-cols-4'>

			{/* ------------- *********** sitebar start **************** -------------- */}
			<MaindashboardSidebar />
			{/* ------------- *********** sitebar end **************** -------------- */}


			<div div className='col-span-3' >
				{/* ------------- *********** navigasion component start **************** -------------- */}
				<div className='py-5'>
					<MainDashboardNavigation />
				</div>
				<div className="w-full rounded-md p-3 h-max bg-orange-200">
					<div className="w-full h-full bg-white rounded-md">
						<div className="px-5 py-4 text-xl">
							<h1 className="">Services hotel offers</h1>
						</div>
						<div className="w-full border border-gray-500"></div>
						<div className="p-5">
							<h1 className="text-xl">Hotel des mille collines services</h1>
							<div className="flex rounded-md bg-orange-200 w-full p-5 gap-10 justify-between items-center mt-5">
								<h1 className="text-xl">Enter service name</h1>
								<input
									type="text"
									id="hotel-address"
									name="hotelAddress"
									className="w-full p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
									placeholder="Enter the serves's name"
								/>
								<div onClick={addservises}>
									<MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton>
								</div>
							</div>
							<div className="flex rounded-md bg-orange-200 w-full h-max p-5 gap-10 justify-between items-center mt-5">
								<div className="flex flex-col  justify-between w-full">
									<div className="mb-10 ">
										{allservises && allservises.map((item) => {
											return <div className="flex justify-between w-full bg-white mb-2 rounded-md px-2">
												<h1 className="text-xl ">{item.name}</h1>
												<input
													type="checkbox"
													onChange={(e) => {
														if (e.target.checked) {
															setservesid(item.id);
															console.log(item.id);

														} else {
															setservesid(null);
														}
													}}
												/>
											</div>
										})}
									</div>
									<div className="flex gap-4">

										<MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>Edit</MainHotelDashboardButton>
										<div onClick={deleteservise}>
											<MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>Delete</MainHotelDashboardButton>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HotelDashboardManageServises;
