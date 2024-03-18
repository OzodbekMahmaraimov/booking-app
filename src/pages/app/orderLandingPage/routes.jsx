import { Route, Routes } from 'react-router-dom'
import OrderLanding from './index'
import DeparutreTame from './departure-tame'
import ComplateTaxiBooking from './complate-taxi-booking'
import Details from './details'
import LocationMap from './location-map'

const MainOrder = () => {
  return (
    <Routes>
      <Route path='/order-landing-page' Component={OrderLanding} />
      <Route path='/departure-tame' Component={DeparutreTame} />
      <Route path='/complate-taxi-booking' Component={ComplateTaxiBooking} />
      <Route path='/details' Component={Details} />
      <Route path='/map-page' Component={LocationMap} />
    </Routes>
  )
}

export default MainOrder