import React from 'react';
import { FaTachometerAlt, FaBed, FaConciergeBell, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MaindashboardSidebar = () => {
    // a uchun aktiv class nomini qaytaradi
    const activeLinkClass = "bg-orange-200 text-orange-700";
    const normalLinkClass = "text-gray-600 hover:bg-orange-100";

    return (
        <div className="h-screen shadow bg-white rounded-lg overflow-y-auto w-full col-span-1">
            <div className="px-6 py-8 flex items-center h-max">
                <img
                    src="/path-to-profile-picture.jpg" // Profil rasmingiz yo'lini kiriting
                    className="h-16 w-16 rounded-full object-cover"
                    alt="Profil"
                />
                <div>
                    <h2 className="mt-4  text-xl font-semibold text-gray-900">Bungingo Mark</h2>
                    <p className=" text-orange-600">Hotel Manager</p>
                </div>
            </div>
            <nav className="mt-8 flex flex-col gap-10 px-5">
                <Link
                    to="/MainDashboard"
                    className={" flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 bg-red-200 flex-row"}
                >
                    <FaTachometerAlt className="mr-3" size={30} />
                    <p>Dashboard</p>
                </Link>
                <Link
                    to="/MainDashboard/description"
                    className={" flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row"}
                >
                    <FaBed className="mr-3" size={30} /> <p>Hotel description</p>
                </Link>
                <Link
                    to="/MainDashboard/managerooms"
                    className={" flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row"}
                >
                    <FaConciergeBell className="mr-3" size={30} /> <p>Manage Rooms</p>
                </Link>
                <Link
                    to="/MainDashboard/manageserveses"
                    className={" flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row"}
                >
                    <FaUser className="mr-3" size={30} /> <p>Manage services</p>
                </Link>
                <Link
                    to="/MainDashboard/myaccaunt"
                    className={" flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row"}
                >
                    <FaUser className="mr-3" size={30} />
                    <p>My account</p>
                </Link>
            </nav>
        </div>
    );
};




export default MaindashboardSidebar;
