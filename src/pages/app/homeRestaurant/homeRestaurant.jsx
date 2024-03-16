// frameworks
import 'react-lazy-load-image-component/src/effects/blur.css';
// style
import './home.css'
// components
import Navbar from '../../../components/layout/navbar/Navbar';
import Home from '../../../components/layout/home/home';
import Alert from '../../../components/layout/alert/Alert';
import Service from '../../../components/layout/service/Service';
import { styles } from '../../../util/style';
import PayCard from '../../../components/layout/payCard/PayCard';
import DeliveryTime from '../../../components/layout/deliveryTime/DeliveryTime';
import { useState } from 'react';
import Galery from '../../../components/layout/galery/Galery';
import MtnCard from '../../../components/layout/mtnCard/MtnCard';
import VisaCard from '../../../components/layout/visaCard/VisaCard';
import Details from '../../../components/layout/details/Details';
import BookingModal from '../../../components/layout/modal/BookingModal';


const HomeRestaurant = () => {

  const [visaCard, setVisaCard] = useState(false)
  const [modal, setModal] = useState(false);
  const [isPay, setIsPay] = useState(false);

  const closeModal = (e) => {
    if (e.target.classList[1] === "modal-backdrop") {
      setModal(false)
    };
    if (e.key === "Escape") setModal(false);
  }


  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='home-restaurant'>
      <Navbar />
      <Home />
      <Alert />
      <Service />
      {isPay
        ?
        <Details />
        :
        <section className={`${styles.container} flex flex-col gap-12 border-2 shadow-lg mt-16`}>
          <div className='w-full flex flex-col md:flex-row justify-between items-center mt-10 px-7'>
            <PayCard setVisaCard={setVisaCard} />
            <DeliveryTime />
          </div>
          <hr className='border-[0.5px] mx-auto w-[90%]' />

          {visaCard ? <VisaCard setModal={setModal} /> : <MtnCard setModal={setModal} />}


        </section>
      }


      {modal && <BookingModal setModal={setModal} setIsPay={setIsPay} isModal={modal} />}



      <Galery />
      <footer className={`${styles.container} my-12`}>
        <hr className='border-[0.5px] mx-auto w-full' />
        <h5 className='text-center text-lg py-2'>Copyright@ 2022 Design by B.Moise</h5>
      </footer>
    </div>
  )
}

export default HomeRestaurant