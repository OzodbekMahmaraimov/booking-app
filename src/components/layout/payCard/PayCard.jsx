// images
import mtnCard from '../../../assets/images/mtn.jpg';
import visaCard from '../../../assets/images/visa.png';

const PayCard = ({setVisaCard}) => {
    return (
        <div className="font-lexend text-center md:text-left">
            <h3 className="text-2xl font-semibold py-2">Payment Methods</h3>
            <p className="px-7">choose payment option</p>
            <div className="flex gap-5 pay-card-home h-[5rem] lg:h-[7rem] mt-5">
                <label onClick={() => setVisaCard(false)} className='flex gap-3 items-center'>
                    <input className='w-5 h-5' type="radio" name='card' defaultChecked />
                    <img className='w-full h-full' src={mtnCard} alt="mtncard" />
                </label>
                <label onClick={() => setVisaCard(true)} className='flex gap-3 items-center'>
                    <input className='w-5 h-5' type="radio" name='card' />
                    <img className='w-full h-full' src={visaCard} alt="visaCard" />
                </label>
            </div>
        </div>
    )
}

export default PayCard