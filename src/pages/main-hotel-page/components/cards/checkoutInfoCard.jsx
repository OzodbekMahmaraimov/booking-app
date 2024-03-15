import React from "react";

const CheckoutInfo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the form
  };

  return (
    <div className="w-full shadow-2xl mx-auto bg-white p-6 border border-gray-300">
      <form onSubmit={handleSubmit}>
        {/* Room Information Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Room information</h2>
          <div className="mb-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Room type</span>
              <span>Premium room</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Number of Rooms</span>
              <span>2</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Occupation duration</span>
              <span>3</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Total amount</span>
              <span>1050000 Rwf</span>
            </div>
            <hr/>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Equivalent total in dollars</span>
              <span>1050$</span>
            </div>
            <hr/>
            
          </div>
        </div>

        {/* Guest Information Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Guest information</h2>
          <div className="mb-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Names</span>
              <span>Byiringiro Moise</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Email address</span>
              <span>moise@gmail.com</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Mobile number</span>
              <span>+250781850774</span>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="w-full flex justify-center items-center">
          <button
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
