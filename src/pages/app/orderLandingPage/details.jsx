import { Link } from "react-router-dom"
import {
  detailsBg,
  cofeDetails,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5
} from "../../../assets/landing-img"
import DetailsInfo from "./components/details/details-info"
import Services from "./components/details/services";
import './styles.css';
import DetailsFilterMenu from "./components/details/details-filter-menu";
import Cards from "./components/details/cards";
import { useEffect, useState } from "react";
import Gallery from "./components/details/gallery";
import Navbar from "./navbar";
import { FaHome } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

const data = [
  { id: 1, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
  { id: 2, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
  { id: 3, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
  { id: 4, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
  { id: 5, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
  { id: 6, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
]

const imgData = [
  { id: 1, img: gallery1 },
  { id: 2, img: gallery2 },
  { id: 3, img: gallery3 },
  { id: 4, img: gallery4 },
  { id: 5, img: gallery5 },
]

const navdata = [
  {id: 1, icon: <FaHome color='black' />, name: 'Home'},
  {id: 2, icon: <FaBowlFood color='black' />, name: 'Create facility'},
  {id: 3, icon: <IoCall color='black' />, name: 'ContactUs'},
  {id: 4, icon: <FiLogIn color='black' />, name: 'Login'}
]

const Details = () => {
  const [items, setItems] = useState(data)
  const [itemsCount, setItemsCount] = useState(0)
  const goBack = () => window.history.back();
  sessionStorage.getItem('detailsId')

  useEffect(() => {
    setItemsCount(items && items.map(c => c.shoppingCount).reduce((a, b) => a + b))
  }, [items])

  return (
    <div className="details-main-font">
      <Navbar navdata={navdata} />
      {/* first section bg img */}
      <div
        className='bg-cover bg-center w-full h-[85vh] rounded-b-2xl'
        style={{ backgroundImage: `url(${detailsBg})` }}></div>

      <div className='max-w-[1200px] mx-auto relative'>
        <DetailsInfo
          name={`Indabo caffee`}
          title={`Restaurant description`}
          description={`Soy asian table restaurant is a restaurant located in the heart 
          of kimihurura it was b rought by japanese to bring the taste of asian food in africa.`}
        />
      </div>
      <div className="max-w-[1400px] mx-auto mt-96 flex justify-end">
        <Link
          onClick={goBack}
          style={{ textShadow: '2px 2px 4px rgba(244, 106, 6, 0.8)' }}
          className='text-2xl font-semibold tracking-wider text-[#F46A06]'
        >Back to restaurants</Link>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <Services />
      </div>
      <div className="max-w-[1100px] mx-auto mt-16">
        <DetailsFilterMenu itemsCount={itemsCount} />
      </div>
      <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
        {items.map(item => (
          <div className="p-7 w-1/3">
            <Cards
              key={item.id}
              item={item}
              setItems={setItems}
            />
          </div>
        ))}
      </div>
      <div className="max-w-[1350px] mx-auto my-16">
        <Gallery imgData={imgData} />
      </div>
    </div>
  )
}

export default Details