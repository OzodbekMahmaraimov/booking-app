import React from 'react'
import MainHotelDashboardButton from '../components/button';

const HotelDashboardDescription = () => {
    return (
        <div className='w-full rounded-md p-3 h-[800px] bg-orange-200 grid grid-cols-1 gap-y-3'>
            <div className='w-full h-max bg-white rounded-md col-span-1'>
                <div className='px-5 py-3 text-2xl'>
                    <h1>Hotel information</h1>
                </div>
                <div className='w-full border border-gray-500'></div>
                <div className='p-5'>
                    <h1 className='text-xl'>Hotel description</h1>
                    <div className='mt-10'>
                        <textarea name="" id="" className='border  rounded-lg bg-orange-200 border-orange-400 w-full h-40 p-5'></textarea>
                        <div className='flex gap-3 justify-end mt-5'>
                            <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton>
                            <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-max bg-white rounded-md p-5 col-span-1 grid grid-cols-2 gap-3'>
                <div className='grid gap-y-4 col-span-1'>
                    <div>
                        <label className="block text-lg font-semibold text-gray-700">
                            Hotel address
                        </label>
                        <input
                            type="text"
                            name="hotelAddress"
                            defaultValue="Klyovu - kigali"
                            className="w-full p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
                            placeholder="Enter the hotel's address"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-semibold text-gray-700">
                            Hotel stars
                        </label>
                        <input
                            type="text"
                            name="hotelAddress"
                            defaultValue="Klyovu - kigali"
                            className="w-full p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
                            placeholder="Enter the hotel's address"
                        />
                    </div>
                    <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton>
                </div>
                <div className='grid gap-y-4 col-span-1 w-full'>
                    <div className='w-full'>
                        <label className="block text-lg font-semibold text-gray-700">
                            Average Price
                        </label>
                        <input
                            type="text"
                            name="hotelAddress"
                            defaultValue="Klyovu - kigali"
                            className="w-full p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
                            placeholder="Enter the hotel's address"
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className="block text-md font-semibold text-gray-700">
                            Add hotel gallery
                        </p>
                        <input
                            type="file"
                            name="hotelAddress"
                            className=" w-44 p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
                        />
                        <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton>
                    </div>
                    <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton>
                </div>
            </div>
        </div>
    )
}

export default HotelDashboardDescription;