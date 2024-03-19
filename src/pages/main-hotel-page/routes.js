import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HotelMain from '.'

function  Hotelroutes() {
  return (
    <div>
        <Routes>
            <Route path='/hotel' element={<HotelMain/>}/>
        </Routes>
    </div>
  )
}

export default Hotelroutes