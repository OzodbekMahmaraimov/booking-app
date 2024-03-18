import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../../Api';
import MaindashboardSidebar from '../components/sitebar';
import { MainDashboardNavigation } from '../components/navigation';

// Har bir statistika kartochkasini ifodalovchi komponent
const StatCard = ({ icon, number, label }) => {
  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <div className={`text-4xl ${iconColor(icon)}`}>{icon}</div>
      <div className="mt-2 text-3xl font-semibold">{number}</div>
      <div className="text-md text-gray-700">{label}</div>
    </div>
  );
};

// Ikon rangini qaytaruvchi yordamchi funksiya
const iconColor = (icon) => {
  let color;
  switch (icon) {
    case '🛏️':
      color = 'text-blue-500';
      break;
    case '🧳':
      color = 'text-red-500';
      break;
    // Boshqa ikonlar uchun ranglar qo'shing
    default:
      color = 'text-gray-500';
  }
  return color;
};


// Asosiy dashboard komponenti
const HotelDashboard = () => {

  const [allRooms, setAllRooms] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [totalCash, setTotalCash] = useState(0);


  useEffect(() => {
    getAllRooms()
  }, [])

  useEffect(() => {
    const calculatedTotal = rooms.reduce((acc, item) => {
      if (item['check-out'] > 0) {
        return acc + item['Total-payment'];
      }
      return acc;
    }, 0);

    setTotalCash(calculatedTotal);
  }, [rooms]);

  function getAllRooms() {
    axios.get(`${apiUrl}hotel-manage`)
      .then((res) => {
        setRooms(res.data["manage-hotels-dashboard-rooms"])
        setAllRooms(res.data["manage-hotels-dashboard-rooms"].length)
      }).catch((err) => {
        console.error(err);
      })
  }
  return (
    <section className='w-full h-max bg-orange-500 p-5 grid gap-5 grid-cols-4'>

      {/* ------------- *********** sitebar start **************** -------------- */}
      <MaindashboardSidebar />
      {/* ------------- *********** sitebar end **************** -------------- */}


      < div className='col-span-3' >
        {/* ------------- *********** navigasion component start **************** -------------- */}
        <div className='py-5'>
          <MainDashboardNavigation />
        </div>
        {/* ------------- *********** navigasion component end **************** -------------- */}

        <div className="p-6 bg-orange-100 w-full   rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
            {/* cards */}
            <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
              <div className={`text-4xl `}>🛏️</div>
              <div className="mt-2 text-3xl font-semibold">{allRooms}</div>
              <div className="text-md text-gray-700">Total Rooms</div>
            </div>

            <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
              <div className={`text-4xl `}>🏄🏿‍♂️</div>
              <div className="mt-2 text-3xl font-semibold">2</div>
              <div className="text-md text-gray-700">Room Types</div>
            </div>

            <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
              <div className={`text-4xl `}>👥</div>
              <div className="mt-2 text-3xl font-semibold">1</div>
              <div className="text-md text-gray-700">Reserations</div>
            </div>

            <div className="flex flex-col items-center justify-center  p-4">
              <div className={`text-4xl `}>🤿</div>
              <div className="mt-2 text-3xl font-semibold">0</div>
              <div className="text-md text-gray-700">Complains</div>
            </div>

          </div>

          {/* ------------- *********** line into blocks **************** -------------- */}

          <div className='border border-gray-500 w-full'></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">

            <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
              <div className={`text-4xl `}>🥂</div>
              <div className="mt-2 text-3xl font-semibold">{rooms.filter(item => item['Room-Status'] === true).length}
              </div>
              <div className="text-md text-gray-700">Booked Rooms</div>
            </div>

            <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
              <div className={`text-4xl `}>🥃</div>
              <div className="mt-2 text-3xl font-semibold">{allRooms}</div>
              <div className="text-md text-gray-700">Avialeble rooms</div>
            </div>

            <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
              <div className={`text-4xl `}>🍾</div>
              <div className="mt-2 text-3xl font-semibold">{rooms.filter(item => item['check-in'] === true).length}</div>
              <div className="text-md text-gray-700">Total checked in</div>
            </div>

            <div className="flex flex-col items-center justify-center  p-4">
              <div className={`text-4xl `}>🍼</div>
              <div className="mt-2 text-3xl font-semibold">{rooms.filter(item => item['check-out'] === true).length}</div>
              <div className="text-md text-gray-700">pending payments</div>
            </div>

          </div>
          {/* ------------- *********** line into blocks **************** -------------- */}
          <div className='border border-gray-500 w-full'></div>

          <div className='grid grid-cols-2 py-5'>
            <div className="flex flex-col col-span-1 items-center justify-center p-4 border-r-2 border-gray-500">
              <div className={`text-4xl `}>🍻</div>
              <div className="mt-2 text-3xl font-semibold">RWF {totalCash} / USD {totalCash / 10}</div>
              <div className="text-md text-gray-700">TOTAL EARNINGS</div>
            </div>
            <div className="flex flex-col items-center justify-center  p-4">
              <div className={`text-4xl `}>🍹</div>
              <div className="mt-2 text-3xl font-semibold">RWF 0 / USD 0</div>
              <div className="text-md text-gray-700">Pending payment</div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
};

export default HotelDashboard;
