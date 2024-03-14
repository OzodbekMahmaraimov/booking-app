import React, { useState } from 'react';
import { FaPencilAlt, FaSave, FaEye } from 'react-icons/fa';

const MainDashboardRoomForm = () => {
  const [room, setRoom] = useState({
    number: 'P002',
    type: 'Premium',
    price: '175000 RWF',
    description: 'PREMIUM ROOM HAS A SINGLE BED WITH A BALCONY AND TV INSIDE',
  });

  // Handlers for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoom({ ...room, [name]: value });
  };

  // Handler for file input change
  const handleFileChange = (event) => {
    // Handle file selection
  };

  // Handlers for buttons
  const handleEdit = () => {
    // Edit logic
  };

  const handleUpdate = () => {
    // Update logic
  };

  const handleSave = () => {
    // Save logic
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Adding new room</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Room number</label>
          <input
            type="text"
            name="number"
            value={room.number}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
          />
          <label className="block mt-4 mb-2 font-medium text-gray-700">Room price/per night</label>
          <input
            type="text"
            name="price"
            value={room.price}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
          />
          <label className="block mt-4 mb-2 font-medium text-gray-700">Room profile picture</label>
          <button className="w-full bg-orange-300 text-white py-2 px-4 rounded-md">Choose image</button>
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Room Type</label>
          <select
            name="type"
            value={room.type}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md bg-white"
          >
            <option value="normal">normal</option>
            <option value="Premium">Premium</option>
          </select>
          <label className="block mt-4 mb-2 font-medium text-gray-700">Room Description</label>
          <textarea
            name="description"
            value={room.description}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-4">
          <button
            onClick={handleEdit}
            className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors duration-300"
          >
            <FaPencilAlt className="inline mr-2" />
            Edit
          </button>
          <button
            onClick={handleUpdate}
            className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors duration-300"
          >
            <FaSave className="inline mr-2" />
            Update
          </button>
          <button
            onClick={handleSave}
            className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors duration-300"
          >
            <FaSave className="inline mr-2" />
            Save
          </button>
        </div>
        <FaEye className="text-orange-500 text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default MainDashboardRoomForm;
