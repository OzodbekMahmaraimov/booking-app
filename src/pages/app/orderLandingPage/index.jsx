import BookingMenu from "./components/booking-menu";
import Button from "./components/button";
import Cards from "./components/cards";
import FilterMenu from "./components/filter-menu";
import FirstSection from "./components/firstSection";
import './styles.css';
import { img1, img2, img3, img4, img5, img6 } from "../../../assets/landing-img";
import AboutFinder from "./components/about-finder";
import Footer from "./components/footer";
import { useState } from "react";
import Navbar from "./navbar";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

const data = [
  { id: 1, img: img1, name: 'Galaxy Hotel' },
  { id: 2, img: img2, name: 'BWOK RESTAURANT' },
  { id: 3, img: img3, name: 'Mille colline hotel' },
  { id: 4, img: img4, name: 'Indabo cafe' },
  { id: 5, img: img5, name: 'Soy asian restaurant' },
  { id: 6, img: img6, name: 'The hut cafe' },
]

const navdata = [
  {id: 1, icon: <FaHome color='black' />, name: 'Home'},
  {id: 3, icon: <IoCall color='black' />, name: 'ContactUs'},
  {id: 4, icon: <FiLogIn color='black' />, name: 'Login'}
]

const OrderLanding = () => {
  const [mainData, setMainData] = useState(data)
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
          className='mr-4'
          leftText='Nearest facilities list'
          rightText='need a taxi to destination click here'
          button={<Button link='/departure-tame' name='Book car' />}
          leftLink={null}
          rightLink={null}
        />
      </div>
      <div className="w-[98%] mx-auto mt-6 border-2 border-gray-300 rounded-md">
        <div className="w-[85%] mx-auto my-12">
          <FilterMenu activeClassAll='text-[#F46A06]' />
        </div>
        <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
          {mainData ?
            mainData.map(item => (
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
                  image={img1}
                  name={'Not Found'}
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

export default OrderLanding;