import BookingMenu from "./components/booking-menu";
import Cards from "./components/cards";
import FilterMenu from "./components/filter-menu";
import FirstSection from "./components/firstSection";
import './styles.css';
import { cofe1, cofe2, cofe3, cofe4, cofe5, cofe6 } from "../../../assets/landing-img";
import AboutFinder from "./components/about-finder";
import Footer from "./components/footer";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import Navbar from "./navbar";

const data = [
    { id: 1, img: cofe1, name: 'Camellia Coffee' },
    { id: 2, img: cofe2, name: 'Cactus Restaurant' },
    { id: 3, img: cofe3, name: 'Inka-steak Restaurant' },
    { id: 4, img: cofe4, name: 'Indabo Cafe' },
    { id: 5, img: cofe5, name: 'Mocha caffee' },
    { id: 6, img: cofe6, name: 'Pishon Caffee' },
]

const navdata = [
    {id: 1, icon: <FaHome color='black' />, name: 'Home'},
    {id: 2, icon: <FaBowlFood color='black' />, name: 'Create facility'},
    {id: 3, icon: <IoCall color='black' />, name: 'ContactUs'},
    {id: 4, icon: <FiLogIn color='black' />, name: 'Login'}
  ]

const Cafe = () => {
    const [cofeData, setCofeData] = useState(data)
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
                    leftText='Nearest facilities list'
                    rightText=''
                    button=''
                    leftLink={null}
                    rightLink={null}
                />
            </div>
            <div className="w-[98%] mx-auto mt-6 border-2 border-gray-300 rounded-md">
                <div className="w-[85%] mx-auto my-12">
                    <FilterMenu activeClassCoffee='text-[#F46A06]' />
                </div>
                <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
                    {cofeData ?
                        cofeData.map(item => (
                            <div className="p-7 w-1/3">
                                <Cards
                                    key={item.id}
                                    image={item.img}
                                    name={item.name}
                                    detailsLink='/details'
                                />
                            </div>
                        )) : (
                            <div className="p-7 w-1/3">
                                <Cards
                                    image={cofe1}
                                    name={'Cofe not found'}
                                />
                            </div>
                        )}
                </div>
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

export default Cafe;