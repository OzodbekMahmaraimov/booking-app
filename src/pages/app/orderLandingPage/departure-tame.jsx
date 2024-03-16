import BookingMenu from "./components/booking-menu";
import FirstSection from "./components/firstSection";
import './styles.css';
import AboutFinder from "./components/about-finder";
import Footer from "./components/footer";
import LocationInput from "./components/location-input";
import Navbar from "./navbar";
import { FaHome } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

const navdata = [
    {id: 1, icon: <FaHome color='black' />, name: 'Home'},
    {id: 2, icon: <FaBowlFood color='black' />, name: 'Create facility'},
    {id: 3, icon: <IoCall color='black' />, name: 'ContactUs'},
    {id: 4, icon: <FiLogIn color='black' />, name: 'Login'}
  ]

const DeparutreTame = () => {
    return (
        <div className="w-full text-black landing-main">
            <Navbar navdata={navdata} />
            <div className="max-w-[1350px] mx-auto pt-12">
                <div className="w-full h-screen">
                    <FirstSection
                        heading={`Online Hospitality facility finder system a right place.`}
                        text='In case you want to access the near by hospitality facilities services this is the  right place for you.'
                        headingTwo='want nearby facilities on the map? click below'
                    />
                </div>
                <BookingMenu
                    className='mr-0'
                    leftText='Book a car'
                    rightText='Back to home page'
                    button=''
                    leftLink='/complate taxi-booking'
                    rightLink='/'
                />
            </div>
            <div className="w-[98%] mx-auto mt-6 border-2 border-gray-300 rounded-md">
                <LocationInput />
            </div>
            <div className="max-w-[1350px] mx-auto mt-20 pb-24 border-b-2 border-gray-400">
                <AboutFinder
                    title='About HFfinder'
                    text='This is the system that links the tourists and hospitality facilities owners. this is done in such way that people can view the nearby their location Hospitality facilitites and be able to access their services aswell as pay on the system. '
                />
            </div>
            <Footer />
        </div>
    )
}

export default DeparutreTame;