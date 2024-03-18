import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { mtn, visa } from "../../../../assets/hotel-page";
import CreditCardForm from "./visa";
import BookingModal from "../modals/BookingModal";

const PaymentForm = ({ change }) => {
  const [paymentMethod, setPaymentMethod] = useState("mtn");
  const [mobileNumber, setMobileNumber] = useState("");
  const [paymentModal, setPaymentModal] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleCardDetailChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentModal(true);
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-2xl rounded-lg px-4 py-6 mb-4 w-full max-w-4xl mx-auto"
    >
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-center">Payment Methods</h2>
        <div className="flex flex-wrap justify-around my-4">
          {/* MTN Mobile Money Option */}
          <label className="flex gap-3 items-center mb-4 md:mb-0">
            <input
              type="radio"
              name="paymentMethod"
              value="mtn"
              checked={paymentMethod === "mtn"}
              onChange={() => setPaymentMethod("mtn")}
              className="text-orange-500 form-radio"
            />
            <div className="flex flex-col items-center">
              <span>MTN Mobile Money</span>
              <LazyLoadImage className="object-cover w-32 h-20 rounded-lg" src={mtn} alt="MTN Mobile Money" />
            </div>
          </label>

          {/* Visa Option */}
          <label className="flex gap-3 items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="visa"
              checked={paymentMethod === "visa"}
              onChange={() => setPaymentMethod("visa")}
              className="text-orange-500 form-radio"
            />
            <div className="flex flex-col items-center">
              <span>VISA</span>
              <LazyLoadImage className="object-cover w-32 h-20 rounded-lg" src={visa} alt="Visa" />
            </div>
          </label>
        </div>
      </div>

      {paymentMethod === "mtn" && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile-number">
            Enter your MTN Mobile Money number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="mobile-number"
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
        </div>
      )}

      {paymentMethod === "visa" && <CreditCardForm />}

      {/* Payment Amount Display */}
      <div className="mb-6 text-center">
        <p className="text-gray-700">Total amount to be paid: 1050000Rwf / 1050USD</p>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline shadow-lg"
          type="submit"
        >
          Pay now
        </button>
      </div>
      <BookingModal change={change} setModal={setPaymentModal} isModal={paymentModal} />
    </form>
  );
};

export default PaymentForm;
