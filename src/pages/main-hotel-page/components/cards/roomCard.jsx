import React, { useState } from "react";
import { landingBg, parkingImg } from "../../../../assets/hotel-page";
import NoLoginModal from "../modals/noLoginModal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RoomCard = ({
  name,
  buttonName,
  contentName,
  description,
  priceRWF,
  priceUSD,
  rooms,
  img,
  setRooms
}) => {
  const [modal, setModal] = useState(false)
  
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  const changeRoomCard = () => setRooms(2)

  return (
    <div className=" rounded-xl shadow-lg room_card_main pb-10">
      {/* Header */}
      <div className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <button onClick={changeRoomCard} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-shadow shadow-lg">
          {buttonName}
        </button>
      </div>
      {/* card body */}
      <div className="w-full px-10">
        <div className="flex room_card_body overflow-hidden">
          {/* card body img */}
          <LazyLoadImage className="w-5/12 object-cover" src={img} alt="" />
          {/* card body content */}
          <div className="p-5 bg-white room_card_body_content ">
            <h2 className="text-2xl font-bold">{contentName}</h2>
            <div className="flex justify-center w-full  ">
              <p className="w-9/12 text-lg py-3 tracking-wider">
                {description}
              </p>
            </div>
            <div className="room_card_body_content_div p-7">
              <span className="flex justify-between p-3">
                <h3 className="text-xl font-semibold">Room price</h3>
                <span>
                  <p className="text-lg text-center">
                    <b>{priceRWF}</b>
                  </p>
                  <p className="text-lg text-center">{priceUSD}</p>
                </span>
              </span>
              <span className="flex justify-between p-3">
                <h3 className="text-xl font-semibold">Room availability</h3>
                <p className="text-lg text-center">{rooms}</p>
              </span>
            </div>
          </div>
        </div>
      <NoLoginModal isOpen={modal} onClose={closeModal}/>
      </div>
    </div>
  );
};

export default RoomCard;
