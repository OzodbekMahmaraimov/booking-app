import React from "react";
import logo from "./../../../../../assets/images/HFfinder.png";
import userIcon from "./../../../../../assets/images/Component 5.png";
import menuIcon1 from "../../../../../assets/images/clarity_list-line.png";
import menuIcon2 from "../../../../../assets/images/clarity_list-line (1).png";
import anally from "../../../../../assets/images/logos_google-analytics.png";
import vector from "../../../../../assets/images/Vector.png";
import customers from "../../../../../assets/images/raphael_customer.png";
import { NavLink } from "react-router-dom"; // Import NavLink

const ResAdminSidebar = () => {
    // Define a function for generating NavLink className
    const getNavLinkClass = ({ isActive }) =>
        `mt-7 h-15 flex items-center gap-2 p-2 rounded-xl cursor-pointer select-none ${isActive ? 'bg-[#F46A06]' : 'hover:bg-[#ccc]'}`;
    const imageWidth = "w-8"
    return (
        <div className="p-5">
            <div className="w-[100%] bg-white h-max rounded-xl  px-4 py-3">
                <div className="flex items-center justify-center  mt-8 mb-10">
                    <img src={logo} alt="" />
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        <img src={userIcon} alt="" />
                    </div>
                    <div>
                        <p className="font-bold text-2xl ">Byiringiro Moise</p>
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[10px] rounded-md bg-[#F46A06]"></div>
                            <p className="text-[#00000099] text-sm">Restorant manager</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <NavLink to="/restourant-itemlist" className={getNavLinkClass}>
                        <img className={imageWidth} src={menuIcon1} alt="" />
                        <p className="text-xl">Item List</p>
                    </NavLink>
                    <NavLink to="/restourant-orderlist" className={getNavLinkClass}>
                        <img className={imageWidth} src={menuIcon2} alt="" />
                        <p className="text-xl">Order List</p>
                    </NavLink>
                    <NavLink to="/restourant-customer" className={getNavLinkClass}>
                        <img className={imageWidth} src={customers} alt="" />
                        <p className="text-xl">Customer</p>
                    </NavLink>
                    {/* Assuming the following routes are correct for these sections */}
                    <NavLink to="/restourant-analytics" className={getNavLinkClass}>
                        <img className="w-6" src={anally} alt="" />
                        <p className="text-xl">Analytics</p>
                    </NavLink>
                    <NavLink to="/restourant-profile" className={getNavLinkClass}>
                        <img className={imageWidth} src={vector} alt="" />
                        <p className="text-xl">My account</p>
                    </NavLink>
                    <div className="mt-5 flex justify-center w-full">
                        <button className="bg-[#F46A06] py-3 px-5 text-xl text-white rounded-xl">Logout</button>
                    </div>
                    <div>
                        <p className="text-xl mt-5">@2022 All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResAdminSidebar;