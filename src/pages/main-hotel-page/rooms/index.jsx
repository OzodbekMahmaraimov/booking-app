import React, { useState } from "react";
import RoomCard from "../components/cards/roomCard";
import { landingBg } from "../../../assets/hotel-page";
import CheckOutCard from "../components/cards/checkOutCard";
import AboutCard from "../components/cards/aboutCard";
import CheckoutInfo from "../components/cards/checkoutInfoCard";
import PaymentForm from "../components/cards/paymentForm";
import axios from 'axios'
import { apiUrl } from "../../../Api";

function HotelRooms() {
  const [rooms, setRooms] = useState(1);

  const getRooms = () => {
    axios.get(`${apiUrl}hotel-manage`)
    .then((res) => {
      console.log(res);
    })
  }
  return (
    <div className="room_page_main w-full p-20 mt-20 flex flex-col gap-10">
      {/* <CheckOutCard/> */}
      {rooms === 1 ? (
        <RoomCard
          setRooms={setRooms}
          img={landingBg}
          name="Premium Room"
          buttonName={"Book now"}
          contentName={"Room Description"}
          description={
            "Our premium room has a signle bed with a small balcon outside and a tv in the room it can host a couple or an individual."
          }
          priceRWF={"175000/rwf"}                                         
          priceUSD={"175/USD"}
          rooms={"4 Rooms"}
        />
      ) : rooms === 2 ? (
        <CheckOutCard change={setRooms}/>
      ) : rooms === 3 ? (
        <CheckoutInfo change={setRooms}/>
      ) : rooms === 4 ? (
        <PaymentForm  change={setRooms}/>
      ) : (
        setRooms(1)
      )}

    </div>
  );
}

export default HotelRooms;
