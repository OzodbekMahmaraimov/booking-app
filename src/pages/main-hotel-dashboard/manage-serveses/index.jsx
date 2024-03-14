import React from 'react'
import MainHotelDashboardButton from '../components/button';

const HotelDashboardManageServises = () => {
    return (
        <div className='w-full rounded-md p-3 h-[800px] bg-orange-200'>
            <div className='w-full h-full bg-white rounded-md'>
                <div className='px-5 py-4 text-xl'>
                    <h1 className=''>Services hotel offers</h1>
                </div>
                <div className='w-full border border-gray-500'></div>
                <div className='p-5'>
                    <h1 className='text-xl'>Hotel des mille collines services</h1>
                    <div className='flex rounded-md bg-orange-200 w-full p-5 gap-10 justify-between items-center mt-5'>
                        <h1 className='text-xl'>Enter service name</h1>
                        <input
                            type="text"
                            id="hotel-address"
                            name="hotelAddress"
                            defaultValue="Klyovu - kigali"
                            className="w-full p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
                            placeholder="Enter the hotel's address"
                        />
                        <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton>
                    </div>
                    <div className='flex rounded-md bg-orange-200 w-full h-max p-5 gap-10 justify-between items-center mt-5'>
                        <div className='flex items-center justify-between w-full'>
                            <h1 className='text-xl'>Free car parking</h1>
                            <div className='flex gap-4'>
                                <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>Edit</MainHotelDashboardButton>
                                <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>Delete</MainHotelDashboardButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDashboardManageServises;