import React, { useState } from 'react'
import HotelDashboard from './Dashboard';
import MainHotelMyAccount from './my-accaunt';
import HotelDashboardManageServises from './manage-serveses';
import HotelDashboardDescription from './hotel-description';
import { MainDashboardManageRooms } from './magage-rooms';
import MainDashboardRoomForm from './magage-rooms/addnewroom';
import TableComponent from './hotelmanager-dashboard';
import { Route, Routes } from 'react-router-dom';

export const MainHotelDashboard = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Routes>
                <Route path='/MainDashboard' Component={HotelDashboard} />
                <Route path='/MainDashboard/description' Component={HotelDashboardDescription} />
                <Route path='/MainDashboard/managerooms' Component={MainDashboardManageRooms} />
                <Route path='/MainDashboard/manageserveses' Component={HotelDashboardManageServises} />
                <Route path='/MainDashboard/myaccaunt' Component={MainHotelMyAccount} />
                <Route path='/MainDashboard/RoomForm' Component={MainDashboardRoomForm} />
            </Routes>
        </>
    )
}

