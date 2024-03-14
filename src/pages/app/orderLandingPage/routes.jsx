import { Route, Routes } from 'react-router-dom'
import Hotels from './hotels'
import OrderLanding from './index'
import Restuarant from './restuarants'
import Cafe from './cafe'
import DeparutreTame from './departure-tame'
import ComplateTaxiBooking from './complate-taxi-booking'
import Details from './details'
import LocationMap from './location-map'

const MainOrder = () => {
  return (
    <Routes>
      <Route path='/order-landing page' Component={OrderLanding} />
      <Route path='/order-landing page/hotels' Component={Hotels} />
      <Route path='/order-landing page/restuarant' Component={Restuarant} />
      <Route path='/order-landing page/cafe' Component={Cafe} />
      <Route path='/departure-tame' Component={DeparutreTame} />
      <Route path='/complate taxi-booking' Component={ComplateTaxiBooking} />
      <Route path='/details' Component={Details} />
      <Route path='/map-page' Component={LocationMap} />
    </Routes>
  )
}

export default MainOrder