import BookingMenu from "./components/booking-menu";
import Button from "./components/button";
import Cards from "./components/cards";
import FilterMenu from "./components/filter-menu";
import FirstSection from "./components/firstSection";
import './styles.css';
import {
  img1, img2, img3, img4, img5, img6,
  hotel1, hotel2, hotel3, hotel4, hotel5, hotel6,
  res1, res2, res3, res4, res5, res6,
  cofe1, cofe2, cofe3, cofe4, cofe5, cofe6
} from "../../../assets/landing-img";
import AboutFinder from "./components/about-finder";
import Footer from "./components/footer";
import { useState } from "react";
import Navbar from "./navbar";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import Pagination from "./components/pagination";

const data = [
  { id: 1, category: 'hotel', img: img1, name: 'Galaxy Hotel' },
  { id: 2, category: 'restuarant', img: img2, name: 'BWOK RESTAURANT' },
  { id: 3, category: 'hotel', img: img3, name: 'Mille colline hotel' },
  { id: 4, category: 'cafe', img: img4, name: 'Indabo cafe' },
  { id: 5, category: 'restuarant', img: img5, name: 'Soy asian restaurant' },
  { id: 6, category: 'cafe', img: img6, name: 'The hut cafe' },
  { id: 7, category: 'restuarant', img: res1, name: 'BWOK-Restaurant' },
  { id: 8, category: 'restuarant', img: res2, name: 'Soy-Asian Restaurant' },
  { id: 9, category: 'restuarant', img: res3, name: 'Inka-steak Restaurant' },
  { id: 10, category: 'restuarant', img: res4, name: 'Povoire-noire Restaurant' },
  { id: 11, category: 'restuarant', img: res5, name: 'Cucina Restaurant' },
  { id: 12, category: 'restuarant', img: res6, name: 'Sundowner Restaurant' },
  { id: 13, category: 'hotel', img: hotel1, name: 'Galaxy Hotel' },
  { id: 14, category: 'hotel', img: hotel2, name: 'Classic Hotel' },
  { id: 15, category: 'hotel', img: hotel3, name: 'Mille colline hotel' },
  { id: 16, category: 'hotel', img: hotel4, name: 'M-Hotel' },
  { id: 17, category: 'hotel', img: hotel5, name: 'Heaven-Hotel' },
  { id: 18, category: 'hotel', img: hotel6, name: 'Marriot-Hotel' },
  { id: 19, category: 'cafe', img: cofe1, name: 'Camellia Coffee' },
  { id: 20, category: 'cafe', img: cofe2, name: 'Cactus Restaurant' },
  { id: 21, category: 'cafe', img: cofe3, name: 'Inka-steak Restaurant' },
  { id: 22, category: 'cafe', img: cofe4, name: 'Indabo Cafe' },
  { id: 23, category: 'cafe', img: cofe5, name: 'Mocha caffee' },
  { id: 24, category: 'cafe', img: cofe6, name: 'Pishon Caffee' },
]

const navdata = [
  { id: 1, icon: <FaHome color='black' />, name: 'Home' },
  { id: 3, icon: <IoCall color='black' />, name: 'ContactUs' },
  { id: 4, icon: <FiLogIn color='black' />, name: 'Login' }
]

const bookingMenus = {
  className: 'mr-4',
  leftText: 'Nearest facilities list',
  rightText: 'need a taxi to destination click here',
  button: <Button link='/departure-tame' name='Book car' />,
  leftLink: null,
  rightLink: null
}

const OrderLanding = () => {

  const [mainData, setMainData] = useState(data)
  const [bookingMenuProp, setBookingMenuProp] = useState(bookingMenus)
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(6)
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = mainData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(mainData.length / productPerPage);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const filterHandler = categoryName => {
    if (categoryName === 'all') {
      setMainData(data)
      setBookingMenuProp(bookingMenus)
    }
    else {
      setMainData(data.filter(c => c.category === categoryName))
      setBookingMenuProp({
        className: 'mr-0',
        leftText: 'Nearest facilities list',
        rightText: '',
        button: '',
        leftLink: null,
        rightLink: null
      })
    }
  }

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
          className={bookingMenuProp.className}
          leftText={bookingMenuProp.leftText}
          rightText={bookingMenuProp.rightText}
          button={bookingMenuProp.button}
          leftLink={bookingMenuProp.leftLink}
          rightLink={bookingMenuProp.rightLink}
        />
      </div>
      <div className="w-[98%] mx-auto mt-6 border-2 border-gray-300 rounded-md">
        <div className="w-[85%] mx-auto my-12">
          <FilterMenu filterHandler={filterHandler} />
        </div>
        <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
          {currentProduct ?
            currentProduct.map(item => (
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
          <div className="w-full text-center mt-6">
            <Pagination
              paginate={paginate}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
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