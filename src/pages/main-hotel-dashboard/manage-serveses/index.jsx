import React from "react";
import MaindashboardSidebar from "../components/sitebar";
import { MainDashboardNavigation } from "../components/navigation";
// import MainHotelDashboardButton from '../components/button';

const HotelDashboardManageServises = () => {
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
									defaultValue="Klyovu - kigali"
									className="w-full p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
									placeholder="Enter the hotel's address"
								/>
								{/* <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton> */}
							</div>
							<div className="flex rounded-md bg-orange-200 w-full h-max p-5 gap-10 justify-between items-center mt-5">
								<div className="flex items-center justify-between w-full">
									<h1 className="text-xl">Free car parking</h1>
									<div className="flex gap-4">
										{/* <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>Edit</MainHotelDashboardButton>
                                <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>Delete</MainHotelDashboardButton> */}
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
