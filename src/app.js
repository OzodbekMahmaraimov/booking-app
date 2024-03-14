import React from 'react'
import Main from './components/layout/main'
import { Route, Routes } from 'react-router-dom'
import HomeRestaurant from './components/layout/homeRestaurant/homeRestaurant'
import OrderLanding from './pages/app/orderLandingPage'
import Login from './pages/auth/login'
import { MainHotelDashboard } from './pages/main-hotel-dashboard'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Main} />
      <Route path='/home' Component={HomeRestaurant} />
      <Route path='/order-landing page' Component={OrderLanding} />
      <Route path='/loginSignUp' Component={Login}/>
      <Route path='/MainHotelDashboard' Component={MainHotelDashboard}/>
    </Routes>
  )
}

export default App;
