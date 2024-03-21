import React, { useState } from "react";
// import { landingBg, parkingImg } from "../../../../assets/hotel-page";
import NoLoginModal from "../modals/noLoginModal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RoomCard = ({
  name,
  buttonName,
  contentName,
  description,
  priceUZS,
  priceUSD,
  rooms,
  img,
  setRooms,
}) => {
  const [modal, setModal] = useState(false)
  
  // const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  const changeRoomCard = () => setRooms(2)

  return (
    <div className=" rounded-xl shadow-lg room_card_main pb-10">
      {/* Header */}
      <div className="flex justify-between flex-col gap-3 sm:flex-row items-center p-8">
        <h1 className="text-2xl font-bold animate-pulse">{name}</h1>
        <button onClick={changeRoomCard} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-shadow shadow-lg">
          {buttonName}
        </button>
      </div>
      {/* card body */}
      <div className="w-full sm:px-10">
        <div className="flex flex-col lg:flex-row room_card_body overflow-hidden">
          {/* card body img */}
          <LazyLoadImage className="w-full lg:w-5/12 object-cover" src={img} alt="" />
          {/* card body content */}
          <div className="w-full p-5 bg-white room_card_body_content ">
            <h2 className="md:text-2xl font-bold">{contentName}</h2>
            <div className="flex justify-center w-full  ">
              <p className="w-9/12 text-lg py-3 tracking-wider">
                {description}
              </p>
            </div>
            <div className="room_card_body_content_div p-7">
              <span className="flex gap-3 justify-between p-3 flex-col sm:flex-row">
                <h3 className="text-xl text-center font-semibold">Room price</h3>
                <span>
                  <p className="text-lg text-center animate-bounce">
                    <b>{priceUSD}</b>
                  </p>
                  <p className="text-lg text-center">{priceUZS}</p>
                </span>
              </span>
              <span className="flex gap-3 justify-between p-3 flex-col sm:flex-row">
                <h3 className="text-xl text-center font-semibold">Room availability</h3>
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
