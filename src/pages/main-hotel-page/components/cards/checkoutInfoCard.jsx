import React from "react";

const CheckoutInfo = ({change}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the form
  };

  return (
    <div className="w-7/12 shadow-2xl rounded-xl gallary_card mx-auto bg-white p-6 border border-gray-300">
      <form onSubmit={handleSubmit}>
        {/* Room Information Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-shadow mb-4">Room information</h2>
          <div className="mb-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-700 text-shadow">Room type</span>
              <span className=" text-shadow">Premium room</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700 text-shadow">Number of Rooms</span>
              <span className=" text-shadow">2</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700 text-shadow">Occupation duration</span>
              <span className=" text-shadow">3</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700 text-shadow">Total amount</span>
              <span className=" text-shadow">1050000 Rwf</span>
            </div>
            <hr/>
            <div className="flex justify-between py-2">
              <span className="text-gray-700 text-shadow">Equivalent total in dollars</span>
              <span className=" text-shadow">1050$</span>
            </div>
            <hr/>
            
          </div>
        </div>

        {/* Guest Information Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-shadow">Guest information</h2>
          <div className="mb-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-700 text-shadow">Names</span>
              <span className=" text-shadow">Byiringiro Moise</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700 text-shadow">Email address</span>
              <span className=" text-shadow">moise@gmail.com</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700 text-shadow">Mobile number</span>
              <span className=" text-shadow">+250781850774</span>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="w-full flex justify-center items-center">
          <button
          onClick={() => {
            change(4)
          }}
            type="submit"
            className=" shadow-2xl text-shadow bg-orange-500 text-white py-2 px-28 rounded hover:bg-orange-600 transition-colors"
          >
            Proceed to check out
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutInfo;
