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
]

const imgData = [
  { id: 1, img: gallery1 },
  { id: 2, img: gallery2 },
  { id: 3, img: gallery3 },
  { id: 4, img: gallery4 },
  { id: 5, img: gallery5 },
]

const navdata = [
  { id: 1, icon: <FaHome color='black' />, name: 'Home' },
  { id: 2, icon: <FaBowlFood color='black' />, name: 'Create facility' },
  { id: 3, icon: <IoCall color='black' />, name: 'ContactUs' },
  { id: 4, icon: <FiLogIn color='black' />, name: 'Login' }
]

const Details = () => {
  const [items, setItems] = useState(null)
  const [itemsFilterData, setItemsFilterData] = useState(null)
  const [itemsGallery, setItemsGallery] = useState(null)
  const [itemsCount, setItemsCount] = useState(0)
  const goBack = () => window.history.back();

  useEffect(() => {
    const detailsId = sessionStorage.getItem('detailsId')
    if (detailsId) {
      try {
        const itemDetailsObject = JSON.parse(detailsId);
        setItems(itemDetailsObject)
        setItemsFilterData(itemDetailsObject.detailsInfo)
        setItemsGallery(itemDetailsObject.gallery)
      } catch (error) {
        console.error("JSON parsing error:", error);
      }
    } else console.log("SessionStorageda 'details' topilmadi.")
  }, [])

  useEffect(() => {
    setItemsCount(itemsFilterData && itemsFilterData.map(c => c.shoppingCount).reduce((a, b) => a + b))
  }, [itemsFilterData])

  return (
    <div className="details-main-font">
      <Navbar navdata={navdata} />
      {/* first section bg img */}
      <div
        className='bg-cover bg-center w-full h-[85vh] rounded-b-2xl'
        style={{ backgroundImage: `url(${items ? items.img : detailsBg})` }}></div>

      <div className='max-w-[1200px] mx-auto relative'>
        <DetailsInfo
          name={items ? items.name : ""}
          title={`${items ? items.category : ""} description`}
          description={items ? items.description : ""}
        />
      </div>
      <div className="max-w-[1400px] mx-auto mt-96 flex justify-end">
        <Link
          onClick={goBack}
          style={{ textShadow: '2px 2px 4px rgba(244, 106, 6, 0.8)' }}
          className='text-2xl font-semibold tracking-wider text-[#F46A06]'
        >Back to {items ? items.category : ""}</Link>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <Services />
      </div>
      <div className="max-w-[1100px] mx-auto mt-16">
        <DetailsFilterMenu itemsCount={itemsCount} />
      </div>
      <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
        {itemsFilterData ?
          itemsFilterData.map(item => (
            <div className="p-7 w-1/3">
              <Cards
                item={item}
                setItemsFilterData={setItemsFilterData}
              />
            </div>
          )) : (
            <div className="p-7 w-1/3">
              <Cards
                item={data}
                setItemsFilterData={setItemsFilterData}
              />
            </div>
          )}
      </div>
      <div className="max-w-[1350px] mx-auto my-16">
        {itemsGallery && <Gallery imgData={itemsGallery} />}
      </div>
    </div>
  )
}

export default Details