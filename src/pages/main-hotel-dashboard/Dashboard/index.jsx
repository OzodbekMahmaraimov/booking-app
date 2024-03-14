import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Api } from '../components/api';

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
  useEffect(() => {
    getAllRooms()
  }, [])
  
  function getAllRooms() {
    axios.get(`${Api}manage-hotels-dashboard-rooms `)
      .then((res) => {
        setAllRooms(res.data.length);
      }).catch((err) => {
        console.error(err);
      })
  }
  return (
    <div className="p-6 bg-orange-100 w-full h-full  rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
        {/* cards */}
        <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">{allRooms}</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>

        <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">43</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>

        <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">2</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>

        <div className="flex flex-col items-center justify-center  p-4">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">43</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>

      </div>

      <div className='border border-gray-500 w-full'></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
        {/* cards */}
        <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">43</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>

        <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">43</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>

        <div className="flex flex-col items-center justify-center  p-4 border-r-2 border-gray-500">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">43</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>

        <div className="flex flex-col items-center justify-center  p-4">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">43</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>

      </div>

      <div className='border border-gray-500 w-full'></div>

      <div className='grid grid-cols-2 py-5'>
        <div className="flex flex-col col-span-1 items-center justify-center p-4 border-r-2 border-gray-500">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">43</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>
        <div className="flex flex-col items-center justify-center  p-4">
          <div className={`text-4xl `}>🛏️</div>
          <div className="mt-2 text-3xl font-semibold">43</div>
          <div className="text-md text-gray-700">Total Rooms</div>
        </div>
      </div>

    </div>
  );
};

export default HotelDashboard;
