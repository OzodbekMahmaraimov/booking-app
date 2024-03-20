// frameworks
import 'react-lazy-load-image-component/src/effects/blur.css';
// style
import './home.css'
// components
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
import InfoModal from '../../../components/layout/modal/InfoModal';
import Navbar from '../orderLandingPage/navbar';
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

const navdata = [
  { id: 1, icon: <FaHome color='black' />, name: 'Home', to: "/" },
  { id: 4, icon: <FiLogIn color='black' />, name: 'Restaurant', to: "/homerestourant" },
  { id: 5, icon: <FiLogIn color='black' />, name: 'hotel', to: "/hotel" },
  { id: 3, icon: <IoCall color='black' />, name: 'ContactUs', to: "" },
  { id: 7, icon: <FiLogIn color='black' />, name: 'Login', to: "loginSignUp" }
]


const HomeRestaurant = () => {

  const [visaCard, setVisaCard] = useState(false)
  const [modal, setModal] = useState(false);
  const [isPay, setIsPay] = useState(true);
  const [modalImage, setModalImage] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [count, setCount] = useState(0);

  const closeModal = (e) => {
    if (e.target.classList[1] === "modal-backdrop") {
      setModal(false)
    };
    if (e.key === "Escape") setModal(false);
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='home-restaurant'>
           <Navbar navdata={navdata} />

      <Home />
      <Alert />
      <Service />
      {isPay
        ?
        <Details setCount={setCount} setCardId={setCardId} setModalImage={setModalImage} />
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
      {/* CHETDAN CHIQADIGAN MODAL👇 */}

      <InfoModal count={count} cardId={cardId} modalImage={modalImage} setModalImage={setModalImage} />



      <footer className={`${styles.container} my-12`}>
        <hr className='border-[0.5px] mx-auto w-full' />
        <h5 className='text-center text-lg py-2'>Copyright@ 2022 Design by B.Moise</h5>
      </footer>
    </div>
  )
}

export default HomeRestaurant;