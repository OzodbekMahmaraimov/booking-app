import React, { useEffect, useState } from "react";
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
  const [roomsData, setRoomsData] = useState(null);

  useEffect(() => {
    getRooms()

  }, [])

  const getRooms = () => {
    axios.get(`${apiUrl}hotel-manage`)
    .then((res) => {
      setRoomsData(res.data['manage-hotels-dashboard-rooms']);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="room_page_main w-full md:p-20 mt-20 flex flex-col gap-10">
      {/* <CheckOutCard/> */}
      {rooms === 1 ? (
        roomsData ? roomsData.map((item, i) =>
          <RoomCard
            setRooms={setRooms}
            img={landingBg}
            name={item['Room-Status'] ? "Premium room" : "Standart room"}
            buttonName={"Book now"}
            contentName={"Room Description"}
            description={item['Room-Description']}
            priceUSD={`${item['Total-payment']}/USD`}                                         
            priceUZS={`${item['Total-payment'] * 12560}/UZS`}
            rooms={`${item['Room-Count']} Rooms`}
          />  
          ) :
          <RoomCard/>
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
