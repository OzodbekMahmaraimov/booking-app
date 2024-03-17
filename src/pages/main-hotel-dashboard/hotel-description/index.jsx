import React, { useEffect, useState } from 'react'
import MaindashboardSidebar from '../components/sitebar';
import { MainDashboardNavigation } from '../components/navigation';
import axios from 'axios';
import { Api, byId } from '../components/api';
import MainHotelDashboardButton from '../components/button';
// import MainHotelDashboardButton from '../components/';

const HotelDashboardDescription = () => {
    const [description, setdescription] = useState({})
    const [roomData, setRoomData] = useState({});


    // ------------ *********** hotel description ***************** ------------------ //
    useEffect(() => {
        getHotelDescription()
    }, [])

    function getHotelDescription() {
        axios.get(`${Api}hotel-manage/`)
            .then((res) => {
                setdescription(res.data["manage-hotels-description"])
                console.log(description);
            }).catch((err) => {
                console.error(err)
            })
    }
    // ------------ *********** hotel description ***************** ------------------ //


    useEffect(() => {
        getHotelManageData();
    }, []);

    const getHotelManageData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/hotel-manage');
            setRoomData(response.data);
        } catch (error) {
            console.error('Error fetching hotel manage data:', error);
        }
    };

    const changebooked = () => {

        const hoteldescription = byId('description').value;
        const hotelAddress = byId('hotelAddress').value;
        const hotelstarts = byId('hotelstarts').value;
        const hotelprice = byId('hotelprice').value;
        const hotelimg = byId('hotelimg').value;


        if (hoteldescription && hotelAddress && hotelstarts && hotelprice && hotelimg) {
            const formData = new FormData();
            formData.append('description', hoteldescription);
            formData.append('hotel-adress', hotelAddress);
            formData.append('hotel-stars', hotelstarts);
            formData.append('hotel-priice', hotelprice);
            formData.append('hotel-img', hotelprice);


            const object = {};

            for (let [key, value] of formData.entries()) {
                object[key] = value;
            }
            roomData["manage-hotels-description"] = object;

            axios.put('http://localhost:3000/hotel-manage', roomData)
                .then((response) => {
                    console.log('Room added:', response.data);
                    getHotelManageData();
                })
                .catch((error) => {
                    console.error('Error adding new room:', error);
                });

        } else {
            console.error('Please fill in all fields.');
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

                <div className='w-full h-max rounded-md p-3  bg-orange-200 grid grid-cols-1 gap-y-3'>
                    <div className='w-full h-max bg-white rounded-md col-span-1'>
                        <div className='px-5 py-3 text-2xl'>
                            <h1>Hotel information</h1>
                        </div>
                        <div className='w-full border border-gray-500'></div>
                        <div className='p-5'>
                            <h1 className='text-xl'>Hotel description</h1>
                            <div className='mt-10'>
                                <textarea name="" id="description" defaultValue={description['description']} className='border  rounded-lg bg-orange-200 border-orange-400 w-full h-40 p-5'></textarea>
                                <div className='flex gap-3 justify-end mt-5'>
                                    {/* <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton>
                            <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton> */}
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
                                    id='hotelAddress'
                                    defaultValue={description["hotel-adress"]}
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
                                    name="hotelstart"
                                    id='hotelstarts'
                                    defaultValue={description["hotel-stars"]}
                                    className="w-full p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
                                    placeholder="Enter the hotel's address"
                                />
                            </div>
                            {/* <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>add service</MainHotelDashboardButton> */}
                        </div>
                        <div className='grid gap-y-4 col-span-1 w-full'>
                            <div className='w-full'>
                                <label className="block text-lg font-semibold text-gray-700">
                                    Average Price
                                </label>
                                <input
                                    type="text"
                                    name="hotelprice"
                                    id="hotelprice"
                                    defaultValue={description["hotel-priice"]}
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
                                    name="hotelim"
                                    id="hotelimg"
                                    className=" w-44 p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
                                />
                            </div>
                        </div>
                        <div onClick={changebooked}>
                            <MainHotelDashboardButton width="w-max" height="h-10" icon={<i className="fa fa-user" />}>change information</MainHotelDashboardButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotelDashboardDescription;