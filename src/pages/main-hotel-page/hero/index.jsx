import React from "react";
import "../index.css";
import AboutCard from "../components/cards/aboutCard";
import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HotelHero() {
  return (
    <div className="w-full h-full">
      <div className="hotel_hero_bg w-full h-screen bg_setting flex items-end pb-32 sm:ps-16 md:ps-32">
        <h1 className="text-white text-xl sm:text-4xl font-bold">
          Average price 170000Rwf / 170$
        </h1>
      </div>
      <div className="w-full flex justify-center mt-20 lg:mt-0 lg:absolute card-setting">
        <AboutCard
          name={"Hotel Des Milles Collines"}
          bodyName={"Hotel Descritpiton"}
          description={
            "Hotel des Milles Collines is the four stars hotel located in the center of the kigali city its beauty lies into its amazing oasis. In 2009 this hotel won the award of the best hotel of the year in Rwanda."
          }
        />
      </div>
      <div className="w-[80%] flex gap-3 hotel_hero_back mt-10 lg:mt-72 justify-end items-center ">
        <FaLeftLong size='3rem' />
        <Link to="/" className="text-2xl font-bold text-yellow-600 text-shadow">Back to Hotels</Link>
      </div>
    </div>
  );
}

export default HotelHero;
