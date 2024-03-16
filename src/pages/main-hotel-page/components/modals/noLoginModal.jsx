import React from "react";
import { Link } from "react-router-dom";

function NoLoginModal({ onClose, isOpen }) {
  if (!isOpen) return null;
  const link = () => document.getElementById("link").click()
  return (
    <div className="fixed sm:px-0 px-5 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <Link to='/loginSignUp' id="link"></Link>
      <div className="relative flex flex-col items-center gap-10 justify-center top-32 mx-auto p-14 border sm:w-4/12 w-full shadow-lg rounded-xl bg-white">
        <p className="text-2xl font-bold px-10 text-center">To Book a room in the hotel you need to loginto your account First.</p>
        <button
          onClick={() => {
            onClose()
            link()
          }}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-20 text-lg rounded text-shadow shadow-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default NoLoginModal;
