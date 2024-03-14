import React, { useState } from 'react'
import { FaEye, FaToolbox } from 'react-icons/fa';
import RoomBookingModal from '../components/room-description-modal';
import MainHotelDashboardButton from '../components/button';

export const MainDashboardManageRooms = () => {
    // Bu erda jadval ma'lumotlari bo'lishi mumkin, hozircha qattiq kodlangan
    const data = [
        {
            roomNo: 'P001',
            roomType: 'premium room',
            price: '175000 RWF',
            status: 'Room booked',
            checkIn: 'Checked in',
            checkOut: 'Not yet',
        },
        {
            roomNo: 'P001',
            roomType: 'premium room',
            price: '175000 RWF',
            status: 'Room booked',
            checkIn: 'Checked in',
            checkOut: 'Not yet',
        },
        // Qo'shimcha ma'lumotlar...
    ];
    const [dats] = useState(data);


    // Komponentning boshqa qismida
    const [isModalOpen, setModalOpen] = useState(false);

    // Modalni ochish
    const openModal = () => setModalOpen(!isModalOpen);
    const closeModal = () => setModalOpen(false);



    return (
        <div className='bg-white p-5 rounded-md'>
            <div>
                <div className='flex justify-between items-center'>
                    <h1>Manage Rooms</h1>
                    <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>Add room</MainHotelDashboardButton>
                </div>
            </div>
            <div className='border w-full my-5'>
                <input type="text" />
            </div>

            <div className='mb-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h1>Show</h1>
                        <button className='bg-orange-200 rounded-md border-orange-300 border-2 px-3 ml-3'>10</button>
                    </div>
                    <div className='flex items-center'>
                        <h1>Search :</h1>
                        <input type="text" className='rounded-md border-orange-300 border-2 px-3 ml-3' />
                    </div>
                </div>
                <div></div>
            </div>
            <table className="min-w-full  bg-orange-200 rounded-xl">
                <thead className=" rounded-xl">
                    <tr className='rounded-lg'>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Room no
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Room Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Room Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Check in
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Check out
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-orange-100 divide-y divide-gray-200">
                    {dats.map((row, i) => (
                        <tr key={i}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.roomNo}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.roomType}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.checkIn}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.checkOut}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex">
                                <p onClick={openModal} href="#" className="text-indigo-600 hover:text-indigo-900">
                                    <FaEye className="inline-block" />
                                </p>
                                <p href="#" className="text-indigo-600 hover:text-indigo-900 ml-4">
                                    <FaToolbox className="inline-block" />
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {isModalOpen && <RoomBookingModal isOpen={isModalOpen} isclose={closeModal} />}
            </table>
        </div>
    );
};