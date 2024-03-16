import { IoWifi } from "react-icons/io5";
import Button from '../button';
import HeadingTitle from "./heading-title";

const Services = () => {
    let data = [
        { img: null, name: 'Out side catering' },
        { img: null, name: 'birthdays ceremonies' },
        { img: null, name: 'Smoking area' },
        { img: <IoWifi fontSize='2.5rem' color="#F46A06" />, name: 'Free wifi' },
        { img: null, name: 'Meetings' },
        { img: null, name: 'engagement events' },
    ]
    
    return (
        <div>
            <HeadingTitle name='Services we offer' />
            <div className='flex justify-around items-start flex-wrap mt-16 gap-10'>
                {data.map(item => (
                    <div className='bg-[#F1E8D7] rounded-lg p-3 w-[40%] h-36 shadow-lg shadow-gray-400'>
                        <div className='bg-white rounded-md w-full h-full flex justify-center items-end flex-wrap px-8 py-5'>
                            {item.img}
                            <p className='w-full text-center text-[#1F1C1C] font-bold tracking-wide'>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-24 text-center">
                <Button link='' name='Explore our menu' />
            </div>
        </div>
    )
}

export default Services