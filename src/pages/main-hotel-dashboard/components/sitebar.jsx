import React, { useState } from 'react';
import { FaTachometerAlt, FaBed, FaConciergeBell, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // useLocation ni import qiling

const MaindashboardSidebar = () => {
    const location = useLocation(); // Joriy joylashuvni olish

    // a uchun aktiv class nomini qaytaradi
    const activeLinkClass = "bg-orange-200 text-orange-700";
    const normalLinkClass = "text-gray-600 hover:bg-orange-100";
    
    // Link uchun class nomini aniqlash funksiyasi
    const getLinkClass = (path) => {
        return location.pathname === path ? `${activeLinkClass} flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row` : `${normalLinkClass} flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row`;
    };
    
    return (
        <div className="h-screen shadow bg-white rounded-lg overflow-y-auto w-full col-span-1">
            <div className="px-6 py-8 flex items-center h-max">
                <img
                    src="/path-to-profile-picture.jpg" // Profil rasmingiz yo'lini kiriting
                    className="h-16 w-16 rounded-full object-cover"
                    alt="Profil"
                />
                <div>
                    <h2 className="mt-4 text-xl font-semibold text-gray-900">Bungingo Mark</h2>
                    <p className="text-orange-600">Hotel Manager</p>
                </div>
            </div>
            <nav className="mt-8 flex flex-col gap-10 px-5">
                <Link to="/MainDashboard" className={getLinkClass("/MainDashboard")}>
                    <FaTachometerAlt className="mr-3" size={30} />
                    <p>Dashboard</p>
                </Link>
                <Link to="/MainDashboard/description" className={getLinkClass("/MainDashboard/description")}>
                    <FaBed className="mr-3" size={30} /><p>Hotel description</p>
                </Link>
                <Link to="/MainDashboard/managerooms" className={getLinkClass("/MainDashboard/managerooms")}>
                    <FaConciergeBell className="mr-3" size={30} /><p>Manage Rooms</p>
                </Link>
                <Link to="/MainDashboard/manageserveses" className={getLinkClass("/MainDashboard/manageserveses")}>
                    <FaUser className="mr-3" size={30} /><p>Manage services</p>
                </Link>
                <Link to="/MainDashboard/myaccaunt" className={getLinkClass("/MainDashboard/myaccaunt")}>
                    <FaUser className="mr-3" size={30} />
                    <p>My account</p>
                </Link>
            </nav>
        </div>
    );
};

export default MaindashboardSidebar;
