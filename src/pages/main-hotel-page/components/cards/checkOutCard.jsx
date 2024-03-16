import React, { useState } from "react";

const CheckOutCard = ({ change }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [amenity, setAmenity] = useState("Fan");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the submission of the data, maybe sending it to a server
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 border rounded-xl gallary_card shadow-2xl border-gray-300"
    >
      {/* Date Picker Inputs */}
      <div className="flex flex-col mb-4">
        <label
          htmlFor="checkin-date"
          className="mb-2 text-shadow text-lg text-gray-700"
        >
          Check-in Date & Time
        </label>
        <input
          type="datetime-local"
          id="checkin-date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="px-3 py-2 border rounded-xl shadow-xl border-gray-300"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="checkout-date"
          className="mb-2 text-lg text-shadow text-gray-700"
        >
          Check-out Date & Time
        </label>
        <input
          type="datetime-local"
          id="checkout-date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="px-3 py-2 border rounded-xl shadow-xl border-gray-300"
        />
      </div>

      {/* Number of People and Rooms */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col">
          <label
            htmlFor="adults"
            className="mb-2 text-lg text-shadow text-gray-700"
          >
            Adults
          </label>

          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="px-3 py-2 border rounded-xl shadow-xl border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="children"
            className="mb-2 text-lg text-shadow text-gray-700"
          >
            Children
          </label>

          <input
            type="number"
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="px-3 py-2 border rounded-xl shadow-xl border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="rooms"
            className="mb-2 text-lg text-shadow text-gray-700"
          >
            Rooms
          </label>
          <input
            type="number"
            id="rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="px-3 py-2 border rounded-xl shadow-xl border-gray-300"
          />
        </div>
      </div>

      {/* Amenities Radio Buttons */}
      <div className="flex items-center mb-4">
        <input
          id="fan"
          type="radio"
          name="amenity"
          value="Fan"
          checked={amenity === "Fan"}
          onChange={() => setAmenity("Fan")}
          className="mr-2"
        />
        <label htmlFor="fan" className="mr-4 text-shadow">
          Fan
        </label>

        <input
          id="air-conditioned"
          type="radio"
          name="amenity"
          value="Air conditioned"
          checked={amenity === "Air conditioned"}
          onChange={() => setAmenity("Air conditioned")}
          className="mr-2 "
        />
        <label
          htmlFor="air-conditioned text-shadow
        "
        >
          Air conditioned
        </label>
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center">

      <button
        type="submit"
        onClick={() => {
          change(3);
        }}
        className="w-7/12 px-4 py-2 bg-orange-500 text-white font-bold text-shadow shadow-2xl rounded hover:bg-orange-600"
      >
        Proceed
      </button>
      </div>
    </form>
  );
};

export default CheckOutCard;
