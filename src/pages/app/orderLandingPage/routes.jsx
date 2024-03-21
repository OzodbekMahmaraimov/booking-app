import { Route, Routes } from 'react-router-dom'
import OrderLanding from './index'
import DeparutreTame from './departure-tame'
import ComplateTaxiBooking from './complate-taxi-booking'
import Details from './details'
import LocationMap from './location-map'

const MainOrder = () => {
  return (
    <Routes>
      <Route path='/' element={<OrderLanding />} />
      <Route path='/departure-tame' element={<DeparutreTame />} />
      <Route path='/complate-taxi-booking' element={<ComplateTaxiBooking />} />
      <Route path='/details/:id/:category/:name' element={<Details />} />
      <Route path='/map-page' element={<LocationMap />} />
    </Routes>
  )
}

export default MainOrder