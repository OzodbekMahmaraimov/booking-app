import React from "react";
import ImgCard from "../components/cards/imgCard";
import { landingBg } from "../../../assets/hotel-page";

function HotelGallary() {
  return (
    <div className="hotel_gallary_main">
      {/* Gallary header */}
      <div className="w-full flex flex-col items-center my-20">
        <div className="flex w-[90%]">
          <h1 className="text-start text-2xl font-bold py-5 text-shadow">
            Our Gallery
          </h1>
        </div>
        <div className="hotel_service_border"></div>
      </div>
      {/* Gallary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-20 justify-items-center gap-10">
        <ImgCard img={landingBg} width={"11/12"} />
        <ImgCard img={landingBg} width={"11/12"} />
        <ImgCard img={landingBg} width={"11/12"} />
        <ImgCard img={landingBg} width={"11/12"} />
      </div>
    </div>
  );
}

export default HotelGallary;
