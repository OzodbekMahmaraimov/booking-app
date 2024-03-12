import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from './navbar/Navbar';
import Home from './home/home';
import Alert from './alert/Alert';
import './home.css'

const HomeRestaurant = () => {

  return (
    <div className='home-restaurant'>
      <Navbar/>
      <Home />
      <Alert />
    </div>
  )
}

export default HomeRestaurant