import scaner from '../../../assets/images/scaner.svg';
import visaText from "../../../assets/images/visa-pay-logo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component"



const VisaCard = ({ setModal }) => {
    return (
        <>
            <div className="w-[90%] visaCard-view mx-auto py-10 bg-[#F1E8D7] mb-8">
                <div className="w-[90%] flex flex-col py-10 gap-7 bg-gradient-to-r from-[#0190FF] to-[#01E3AF] mx-auto">
                    <div className="w-[90%] mx-auto flex-col items-center sm:flex-row flex justify-between">
                        <LazyLoadImage className='w-[6rem]' src={scaner} alt='scaner' effect='blur' />
                        <LazyLoadImage className='w-[6rem]' src={visaText} alt='visa text' effect='blur' />
                    </div>
                    <div className='w-[90%] mx-auto grid grid-cols-2 gap-x-5 gap-y-12 text-white'>
                        <label className='flex flex-col col-span-2 gap-2'>
                            <span className=' opacity-70'>Card Number</span>
                            <input className='w-full px-2 text-xl text-white border-0 border-b-2 border-white outline-none bg-transparent' type="number" inputmode="numeric" />
                        </label>
                        <label className='flex flex-col gap-2 col-span-2'>
                            <span className=' opacity-70'>Card Holder Name</span>
                            <input className='w-full px-2 text-xl text-white border-0 border-b-2 border-white outline-none bg-transparent' type="text" inputmode="numeric" />
                        </label>
                        <label className='flex flex-col gap-2 sm:col-span-1 col-span-2'>
                            <span className=' opacity-70'>Expiry date</span>
                            <input className='w-full px-2 text-xl text-white border-0 border-b-2 border-white outline-none bg-transparent' type="date" inputmode="numeric" />
                        </label>
                        <label className='flex flex-col gap-2 sm:col-span-1 col-span-2'>
                            <span className=' opacity-70'>CVV</span>
                            <input className='w-full px-2 text-xl text-white border-0 border-b-2 border-white outline-none bg-transparent' type="number" inputmode="numeric" />
                        </label>
                    </div>
                </div>
                <div className='max-w-[600px] mt-20 py-5 rounded-lg bg-white text-center mx-auto font-lexend'>
                    <h1><span className='text-2xl'>Total amount to be paid :</span> <br className='sm:hidden block' /> <span className='text-lg'>9000 Rwf / 9 USD</span> </h1>
                </div>
                <div className='w-full flex justify-center font-quicksand mt-5'>
                    <button onClick={() => setModal(true)} className='bg-[#F46A06] py-4 px-20 shadow-xl rounded-lg mx-auto text-white text-2xl duration-300 active:scale-90'>
                        Pay now
                    </button>
                </div>
            </div>
        </>
    )
}

export default VisaCard