import React from "react";
import RoomCard from "../components/cards/roomCard";
import { landingBg } from "../../../assets/hotel-page";
import CheckOutCard from "../components/cards/checkOutCard";
import CheckoutInfo from "../components/cards/checkoutInfoCard";
import PaymentForm from "../components/cards/paymentForm";

function HotelRooms() {
  return (
    <div className="room_page_main w-full p-20 mt-20 flex flex-col gap-10">
      {/* <CheckOutCard/>
      <CheckoutInfo/>
      <PaymentForm/> */}
      <RoomCard
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
      <RoomCard
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
      <RoomCard
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
      <RoomCard
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
    </div>
  );
}

export default HotelRooms;
