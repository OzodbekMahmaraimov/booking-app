import React, { useEffect, useState } from 'react'
import { FaEye, FaToolbox } from 'react-icons/fa';
import RoomBookingModal from '../components/room-description-modal';
import MaindashboardSidebar from '../components/sitebar';
import { MainDashboardNavigation } from '../components/navigation';
import MainHotelDashboardButton from '../components/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../../Api';
// import MainHotelDashboardButton from '../components/button';

export const MainDashboardManageRooms = () => {
    const [roomDatas, setRoomDatas] = useState([]);
    const [roomId, setRoomId] = useState(0);
    // Bu erda jadval ma'lumotlari bo'lishi mumkin, hozircha qattiq kodlangan
    const [roomData, setRoomData] = useState({});
    const [allRooms, setAllRooms] = useState([]);
    const [roomsLength, setRoomsLength] = useState(0);
    const [currentRoomId, setCurrentRoomId] = useState({});

    // ------------- *********** for geting rooms ************************* -------------- //
    useEffect(() => {
        getRooms()
    }, [])

    const getRooms = async () => {
        try {
            const res = await axios.get(`${apiUrl}hotel-manage`)
            setRoomDatas(res.data['manage-hotels-dashboard-rooms']);

        } catch (error) {
            console.error(error);
        }
    }


    // ------------- *********** for geting rooms ************************* -------------- //

    useEffect(() => {
        getHotelManageData();
    }, []);

    const getHotelManageData = async () => {
        try {
            const response = await axios.get(apiUrl +'hotel-manage');
            setRoomData(response.data);
            setAllRooms(response.data["manage-hotels-dashboard-rooms"]);
            setRoomsLength(response.data["manage-hotels-dashboard-rooms"].length);
        } catch (error) {
            console.error('Error fetching hotel manage data:', error);
        }
    };

    const changebooked = (id, status) => {

        setCurrentRoomId(allRooms.find(room => room.id === id))
        currentRoomId['Room-Status'] = false
        console.log(currentRoomId['Room-Status']);



        axios.put( apiUrl + 'hotel-manage', roomData)
            .then((response) => {
                console.log('Room added:', response.data);
            })
            .catch((error) => {
                console.error('Error adding new room:', error);
            });
            getRooms()
    }
    // Qo'shimcha ma'lumotlar...


    // Komponentning boshqa qismida
    const [isModalOpen, setModalOpen] = useState(false);

    // Modalni ochish
    const openModal = () => setModalOpen(!isModalOpen);
    const closeModal = () => setModalOpen(false);

    //set new room or update room
    // function setRoom(room) {

    // }



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
                <div className='bg-white p-5 rounded-md'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h1>Manage Rooms</h1>
                            <Link to="/MainDashboard/RoomForm">
                                <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>Add room</MainHotelDashboardButton>
                            </Link>
                        </div>
                    </div>
                    <div className='border w-full my-5'>
                        <input type="text" />
                    </div>

                    <div className='mb-10'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <h1>Show</h1>
                                <button className='bg-orange-200 rounded-md border-orange-300 border-2 px-3 ml-3'>{roomsLength}</button>
                            </div>
                            <div className='flex items-center'>
                                <h1>Search :</h1>
                                <input type="text" className='rounded-md border-orange-300 border-2 px-3 ml-3' />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <table className="min-w-full  bg-orange-200 rounded-xl mb-3">
                        <thead className=" rounded-xl">
                            <tr className='rounded-lg'>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Room no
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Room Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    price
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
                            {roomDatas.length > 0 && roomDatas.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row['Room-no']}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['Room-Type'] ? "premium" : "normal"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['Total-payment']}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row["Room-Status"] == true ? "booked" : "unbooked"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['check-in'] ? "checked in" : 'not yet'}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['check-in'] ? "checked out" : 'not yet'}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex">
                                        <p onClick={() => {
                                            openModal()
                                            setRoomId(row.id)

                                        }} href="#" className="text-indigo-600 hover:text-indigo-900">
                                            <FaEye className="inline-block" />
                                        </p>
                                        <p onClick={() => {
                                            changebooked(row.id , row["Room-Status"])
                                        }} href="#" className="text-indigo-600 hover:text-indigo-900 ml-4">
                                            <FaToolbox className="inline-block" />
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {isModalOpen && <RoomBookingModal isOpen={isModalOpen} isclose={closeModal} id={roomId} />}
                    </table>
                </div>
            </div>
        </section>
    );
};