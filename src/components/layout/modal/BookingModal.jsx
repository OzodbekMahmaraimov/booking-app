import { LazyLoadImage } from 'react-lazy-load-image-component';
import thanks1 from '../../../assets/images/thanks1.svg';
import thanks2 from '../../../assets/images/thanks2.svg';

const BookingModal = ({ setModal, setIsPay }) => {
  if (!setModal) return null;

  const changeModal = () => setModal()

  return (
    <div className="fixed modal-backdrop top-0 z-20 flex justify-center items-center left-0 inset-0 bg-gray-600 bg-opacity-50 overflow-hidden h-screen w-full">
      <div className='bg-white text-[#F46A06] max-w-[650px] h-[70%] py-10 px-12 flex flex-col items-center justify-between'>
        <div className='w-full flex justify-center items-center flex-col gap-5'>
          <LazyLoadImage className='w-[25%] mx-auto' effect='blur' src={thanks1} alt='thanks 1' />
          <LazyLoadImage className='w-[40%] mx-auto' effect='blur' src={thanks2} alt='thanks 2' />
        </div>
        <h1 className='text-3xl font-semibold '>Thank You</h1>
        <h4 className='font-semibold'>Your Rooms are
          already booked</h4>
        <button onClick={() => {
          setModal(false);
          setIsPay && setIsPay(true);
        }}
          className='bg-[#F46A06] text-white text-lg py-4 px-10 rounded-[1rem] duration-300 active:scale-90'>Print your ticket</button>
      </div>
    </div>
  );
};

export default BookingModal;
