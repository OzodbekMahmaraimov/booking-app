// frameworks
import 'react-lazy-load-image-component/src/effects/blur.css';
// style
import './home.css';
// components
import { useState, useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import Navbar from '../orderLandingPage/navbar';
import Home from '../../../components/layout/home/home';
import Alert from '../../../components/layout/alert/Alert';
import Service from '../../../components/layout/service/Service';
import PayCard from '../../../components/layout/payCard/PayCard';
import DeliveryTime from '../../../components/layout/deliveryTime/DeliveryTime';
import Galery from '../../../components/layout/galery/Galery';
import MtnCard from '../../../components/layout/mtnCard/MtnCard';
import VisaCard from '../../../components/layout/visaCard/VisaCard';
import Details from '../../../components/layout/details/Details';
import BookingModal from '../../../components/layout/modal/BookingModal';
import InfoModal from '../../../components/layout/modal/InfoModal';
import { styles } from '../../../util/style';


const navdata = [
  { id: 1, icon: <FaHome color='black' />, name: 'Home', to: "/", isActive: false },
  { id: 4, icon: <FiLogIn color='black' />, name: 'Restaurant', to: "/homerestourant", isActive: true },
  { id: 5, icon: <FiLogIn color='black' />, name: 'hotel', to: "/hotel", isActive: false },
  { id: 3, icon: <IoCall color='black' />, name: 'ContactUs', to: "", isActive: false },
  { id: 7, icon: <FiLogIn color='black' />, name: 'Login', to: "/loginSignUp", isActive: false }
]


const HomeRestaurant = () => {
  const [visaCard, setVisaCard] = useState(false);
  const [modal, setModal] = useState(false);
  const [isPay, setIsPay] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [count, setCount] = useState(0);

  const closeModal = (e) => {
    if (e.target.classList.contains("modal-backdrop") || e.key === "Escape") {
      setModal(false);
    }
  };

  useEffect(() => {
    const closeModalOnEsc = (e) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    };

    document.addEventListener("keydown", closeModalOnEsc);

    return () => document.removeEventListener("keydown", closeModalOnEsc);
  }, []);

  return (
    <div onClick={closeModal} className='home-restaurant'>
      <Navbar navdata={navdata} />
      <Home />
      <Alert />
      <Service />
      <section className={`${styles.container} ${isPay ? 'hidden' : 'flex flex-col gap-12 border-2 shadow-lg mt-16'}`}>
        <div className='w-full flex flex-col md:flex-row justify-between items-center mt-10 px-7'>
          <PayCard setVisaCard={setVisaCard} />
          <DeliveryTime />
        </div>
        <hr className='border-[0.5px] mx-auto w-[90%]' />
        {visaCard ? <VisaCard setModal={setModal} /> : <MtnCard setModal={setModal} />}
      </section>
      {isPay && <Details setCount={setCount} setCardId={setCardId} setModalImage={setModalImage} />}
      {modal && <BookingModal setModal={setModal} setIsPay={setIsPay} isModal={modal} />}
      <Galery />
      <InfoModal count={count} cardId={cardId} modalImage={modalImage} setModalImage={setModalImage} />
      <footer className={`${styles.container} my-12`}>
        <hr className='border-[0.5px] mx-auto w-full' />
        <h5 className='text-center text-lg py-2'>Copyright@ 2022 Design by B.Moise</h5>
      </footer>
    </div>
  );
};

export default HomeRestaurant;
