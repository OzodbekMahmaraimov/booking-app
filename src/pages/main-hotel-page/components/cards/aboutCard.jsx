import React from "react";
import { aboutCardImg } from "../../../../assets/hotel-page";
import { FaStar } from "react-icons/fa6";
import "../../index.css";

function AboutCard({ name, bodyName, description }) {
  return (
    <div className="hotel_about_card flex flex-col items-center justify-center">
      {/* card-header */}
      <div className="w-full flex items-center justify-between hotel_about_card_header gap-3">
        <div className="flex items-end  ">
          <h1 className="text-2xl font-semibold tracking-wider text-shadow">{name}</h1>
          <img className="w-[50px]" src={aboutCardImg} alt="Card img" />
        </div>
        {/* stars */}
        <div className="flex items-center gap-3">
          <ul id="card-stars" className="flex gap-2">
            <li className="card-star">
              <FaStar color="#F46A06" />
            </li>
            <li className="card-star">
              <FaStar color="#F46A06" />
            </li>
            <li className="card-star">
              <FaStar color="#F46A06" />
            </li>
            <li className="card-star">
              <FaStar color="#F46A06" />
            </li>
            <li className="card-star">
              <FaStar color="#F46A06" />
            </li>
          </ul>
          <p>Stars</p>
        </div>
      </div>
      {/* card-border */}
      <div className="hotel_about_card_border my-5"></div>
      {/* card-body */}
      <div className="hotel_about_card_body w-[90%]">
        <h2 className="text-xl font-semibold py-2 text-shadow">{bodyName} </h2>
        <p className="px-14 text-lg tracking-wider text-shadow">
          {description}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
