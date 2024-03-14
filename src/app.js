import React from 'react'
import Main from './components/layout/main'
import { Route, Routes } from 'react-router-dom'
import OrderLanding from './pages/app/orderLandingPage'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signUp'
import IndexMain from './pages/main-admin-page'
import MainOrder from './pages/app/orderLandingPage/routes'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/MainDashboardIndex' Component={IndexMain} />
        <Route path='/order-landing page' Component={OrderLanding} />
        <Route path='/loginSignUp' Component={Login} />
        <Route path='/signUp' Component={SignUp} />
      </Routes>
      <MainOrder />
    </>
  )
}

export default App
