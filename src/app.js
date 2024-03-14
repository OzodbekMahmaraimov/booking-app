import React from 'react'
import Main from './components/layout/main'
import { Route, Routes } from 'react-router-dom'
import OrderLanding from './pages/app/orderLandingPage'
import Login from './pages/auth/login'
<<<<<<< HEAD
import { MainHotelDashboard } from './pages/main-hotel-dashboard'
=======
import HomeRestaurant from './pages/app/homeRestaurant/homeRestaurant'
>>>>>>> ozodbek/main

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
