import React from "react";
import "../index.css";
import ServiceCard from "../components/cards/serviceCard";
import {
  parkingImg,
  yogaImg,
  wifiImg,
  swimmingImg,
  workingImg,
  meetingImg,
} from "../../../assets/hotel-page";

function HotelServices() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Service header */}
      <div className="w-full flex flex-col items-center mb-20">
        <div className="flex w-[90%]">
          <h1 className="text-start text-2xl font-bold py-5 text-shadow">
            Services we offer
          </h1>
        </div>
        <div className="hotel_service_border"></div>
      </div>
      {/* Service cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-14">
        <ServiceCard img={parkingImg} text="Free car parking" />
        <ServiceCard img={swimmingImg} text="Swimming Pool" />
        <ServiceCard img={workingImg} text="Fitness center" />
        <ServiceCard img={wifiImg} text="Free wifi" />
        <ServiceCard img={meetingImg} text="Meetings" />
        <ServiceCard img={yogaImg} text="Yoga class for adults" />
      </div>
      {/* service button */}
      <div className="py-20">
        <button className="bg-orange-500 hover:bg-orange-700 text-white text-lg font-bold py-4 px-8 rounded text-shadow shadow-lg">
          Explore our rooms
        </button>
      </div>
    </div>
  );
}

export default HotelServices;
