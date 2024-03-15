import React, { useState } from 'react';
import { FaPencilAlt, FaSave, FaEye } from 'react-icons/fa';
import MaindashboardSidebar from '../components/sitebar';
import { MainDashboardNavigation } from '../components/navigation';
import MainHotelDashboardButton from '../components/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Api, byId } from '../components/api';

const MainDashboardRoomForm = () => {
  const [elfrom, setelfrom] = useState(false)
  useEffect(() => {
    getHotelManageData();

  }, [])
  
  const getHotelManageData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/hotel-manage');
      const roomsData = response.data['manage-hotels-dashboard-rooms'];
      console.log(roomsData);
      // Endi roomsData o'zgaruvchisida "manage-hotels-dashboard-rooms" yo'lidagi ma'lumotlar bor
      // Siz bu ma'lumotlar bilan kerakli amallarni bajara olasiz
    } catch (error) {
      console.error('Error fetching hotel manage data:', error);
    }
  };

  // Funksiyani chaqirish

  const handleSave = () => {
    const roomNumber = document.getElementById('room-number').value;
    const roomPrice = document.getElementById('room-price').value;
    const roomType = document.getElementById('room-type').value;
    const roomDescription = document.getElementById('room-description').value;
    const roomImage = document.getElementById('room-image').files[0];

    // Elementlarning mavjudligini tekshirish
    const allFieldsFilled = roomNumber && roomPrice && roomType && roomDescription && roomImage;

    // useState yordamida elfrom qiymatini o'zgartirish
    setelfrom(allFieldsFilled);

    // allFieldsFilled shart asosida POST so'rovini yuborish
    if (allFieldsFilled) {
      const formData = new FormData();
      formData.append('Room-no', roomNumber);
      formData.append('Room-Type', roomType);
      formData.append('Room-Status', true);
      formData.append('Room-Description', roomDescription);
      formData.append('Room-Image', roomImage);
      formData.append('check-in', false);
      formData.append('check-out', false);
      formData.append('Total-payment', roomPrice);
      formData.append('Pending payments', false);

      axios.post(`${Api}manage-hotels-dashboard-rooms`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

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

        <div className={`max-w-full mx-auto p-6 bg-white rounded-lg shadow-md `}>
          <h2 className="text-2xl font-semibold mb-6">Adding new room</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Room number</label>
              <input
                placeholder='0 0 0 0 '
                type="text"
                name="number"
                id='room-number'
                className="w-full border-2 border-gray-300 p-2 rounded-md"
              />
              <label className="block mt-4 mb-2 font-medium text-gray-700">Room price/per night</label>
              <input
                placeholder='$ 88888'
                type="text"
                name="price"
                id='room-price'
                className="w-full border-2 border-gray-300 p-2 rounded-md"
              />
              <label className="block mt-4 mb-2 font-medium text-gray-700">Room profile picture</label>
              <input
                type="file"
                id='room-image'
                className=" w-max p-2 border-2 border-gray-400 rounded-md text-orange-500 placeholder:text-orange-500 focus:outline-none focus:border-orange-600"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Room Type</label>
              <select
                name="type"
                id='room-type'
                className="w-full border-2 border-gray-300 p-2 rounded-md bg-white"
              >
                <option value="normal">normal</option>
                <option value="Premium">Premium</option>
              </select>
              <label className="block mt-4 mb-2 font-medium text-gray-700">Room Description</label>
              <textarea
                name="description"
                id='room-description'
                className="w-full border-2 border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-4">
              <Link to="/MainDashboard/managerooms">
                <MainHotelDashboardButton width="w-max" height="h-10" icon={<FaPencilAlt className="inline mr-2" />}>exit</MainHotelDashboardButton>
              </Link>
              <div onClick={handleSave}>
                <MainHotelDashboardButton width="w-max" height="h-10" icon={<FaSave className="inline mr-2" />}>Add room</MainHotelDashboardButton>
              </div>
            </div>
            <FaEye className="text-orange-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDashboardRoomForm;
