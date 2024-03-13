import React from "react";
import "../../index.css"

function ServiceCard({ img, text }) {
  return (
    <div className="flex flex-col justify-center items-center px-28 py-14 servis_card">
      <div className="servis_card_img w-[100px] h-[100px] overflow-hidden flex items-center justify-center">
        <img className="object-cover" src={img} alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ServiceCard;
