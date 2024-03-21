import React, { useState } from "react";
import HotelHero from "./hero";
import HotelServices from "./services";
import HotelRooms from "./rooms";
import HotelGallary from "./gallary";
import Footer from "./components/footer/Footer";
import Navbar from "../app/orderLandingPage/navbar";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

const navdata = [
  { id: 1, icon: <FaHome color='black' />, name: 'Home', to: "/", isActive: false },
  { id: 4, icon: <FiLogIn color='black' />, name: 'Restaurant', to: "/homerestourant", isActive: false },
  { id: 5, icon: <FiLogIn color='black' />, name: 'hotel', to: "/hotel", isActive: true },
  { id: 3, icon: <IoCall color='black' />, name: 'ContactUs', to: "", isActive: false },
  { id: 7, icon: <FiLogIn color='black' />, name: 'Login', to: "/loginSignUp", isActive: false }
]

function HotelMain() {
  return (
    <div className="w-full">
      {/* navbar */}
      <Navbar navdata={navdata} />
      {/* Hero page */}
      <section className="pt-10">
        <HotelHero />
      </section>
      {/* Service page */}
      <section>
        <HotelServices />
      </section>
      {/* Rooms page */}
      <section className="md:px-10">
        <HotelRooms />
      </section>
      {/* Gallary page */}
      <section>
        <HotelGallary />
      </section>
      {/* Footer */}
      <footer className="flex flex-col justify-center items-center pt-20">
        <div className="border-2 border-black w-10/12"></div>
        <Footer />
      </footer>
    </div>
  );
}
export default HotelMain;
