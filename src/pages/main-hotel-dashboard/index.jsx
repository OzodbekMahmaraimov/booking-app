import React, { useState } from 'react'
import HotelDashboard from './Dashboard';
// import { Route, Routes } from 'react-router-dom';
import MaindashboardSidebar from './components/sitebar';
import MainHotelMyAccount from './my-accaunt';
import HotelDashboardManageServises from './manage-serveses';
import HotelDashboardDescription from './hotel-description';
import { MainDashboardManageRooms } from './magage-rooms';
import { MainDashboardNavigation } from './components/navigation';
import MainDashboardRoomForm from './magage-rooms/addnewroom';
import TableComponent from './hotelmanager-dashboard';
import { Route, Routes } from 'react-router-dom';

export const MainHotelDashboard = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Routes>
                <Route path='/MainHotelDashboard/nimadir' Component={HotelDashboard} />
            </Routes>
        </>
    )
}

