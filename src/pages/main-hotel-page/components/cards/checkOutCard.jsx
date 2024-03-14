import React from 'react'

function CheckOutCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col p-4">
        {/* Check-in Date & Time */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-gray-700">
            <span className="w-6 h-6 inline-block mr-2"><img src="/path-to-checkin-icon" alt="Check-in"/></span>
            Checkin date & time
          </label>
          <span className="text-orange-500">✓</span>
        </div>

        {/* Checkout Date & Time */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-gray-700">
            <span className="w-6 h-6 inline-block mr-2"><img src="/path-to-checkout-icon" alt="Checkout"/></span>
            Checkout date & time
          </label>
          <span className="text-orange-500">✓</span>
        </div>

        {/* Divider */}
        <hr className="my-4"/>

        {/* Number of Guests */}
        <div className="mb-4 text-gray-700">
          <span className="mr-2"><img src="/path-to-guest-icon" alt="Guests"/></span>
          0 Adults, 0 Children, 0 room
        </div>

        {/* Amenities Options */}
        <div className="flex items-center mb-4">
          <input type="radio" id="fan" name="amenities" className="hidden peer" />
          <label for="fan" className="flex items-center cursor-pointer peer-checked:border-orange-500 mr-4">
            <span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-300 peer-checked:bg-orange-500"></span>
            Fan
          </label>

          <input type="radio" id="air-conditioned" name="amenities" className="hidden peer" />
          <label for="air-conditioned" className="flex items-center cursor-pointer peer-checked:border-orange-500">
            <span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-300 peer-checked:bg-orange-500"></span>
            Air conditioned
          </label>
        </div>

        {/* Proceed Button */}
        <button className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
          Proceed
        </button>
      </div>
    </div>
  )
}

export default CheckOutCard