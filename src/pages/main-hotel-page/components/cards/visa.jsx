import React, { useState } from 'react';

const CreditCardForm = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '•••• •••• •••• ••••',
    cardName: 'Foydalanuvchi Ismi',
    expiryDate: '••/••',
    cvv: '•••'
  });

  const handleInputChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-xl max-w-lg mx-auto text-white shadow-xl">
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <div>💳</div>
          <h1 className="text-xl font-bold">VISA</h1>
        </div>
        <div className="flex space-x-3">
          <h1 className="text-xl font-bold">VISA</h1>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="cardNumber" className="text-sm">Card Number</label>
        <input
          id="cardNumber"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="\d*"
          placeholder="•••• •••• •••• ••••"
          className="mt-1 w-full px-3 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-blue-300"
          onChange={handleInputChange}
          value={cardInfo.cardNumber}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="cardName" className="text-sm">Card Holder Name</label>
        <input
          id="cardName"
          name="cardName"
          type="text"
          placeholder="Foydalanuvchi Ismi"
          className="mt-1 w-full px-3 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-blue-300"
          onChange={handleInputChange}
          value={cardInfo.cardName}
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <label htmlFor="expiryDate" className="text-sm">Expiry Date</label>
          <input
            id="expiryDate"
            name="expiryDate"
            type="text"
            pattern="\d*"
            placeholder="••/••"
            className="mt-1 px-3 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-blue-300"
            onChange={handleInputChange}
            value={cardInfo.expiryDate}
          />
        </div>
        
        <div>
          <label htmlFor="cvv" className="text-sm">CVV</label>
          <input
            id="cvv"
            name="cvv"
            type="text"
            inputMode="numeric"
            pattern="\d*"
            placeholder="•••"
            className="mt-1 px-3 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-blue-300"
            onChange={handleInputChange}
            value={cardInfo.cvv}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
