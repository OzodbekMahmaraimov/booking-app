import { Link } from "react-router-dom"
import {
  detailsBg,
  cofeDetails,
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
import Pagination from "./components/pagination";
import InfoModal from "./components/info-modal";

const data = [
  { id: 1, img: cofeDetails, shoppingCount: 0, name: 'Latte(Hot)', countName: 'QTY:', btn1: '2500 RWF', btn2: 'Add to order' },
]

// ****************************** Navbar uchun obj ******************************
const navdata = [
  { id: 1, icon: <FaHome color='black' />, name: 'Home', to: "/" },
  { id: 4, icon: <FiLogIn color='black' />, name: 'Restaurant', to: "/homerestourant" },
  { id: 5, icon: <FiLogIn color='black' />, name: 'hotel', to: "/hotel" },
  { id: 3, icon: <IoCall color='black' />, name: 'ContactUs', to: "" },
  { id: 7, icon: <FiLogIn color='black' />, name: 'Login', to: "loginSignUp" }
]

const Details = () => {
  const [items, setItems] = useState(null)
  const [itemsFilterData, setItemsFilterData] = useState(null)
  const [itemsGallery, setItemsGallery] = useState(null)
  const [detailsOfficanvas, setdetailsOfficanvas] = useState(null)
  const [itemsCount, setItemsCount] = useState(0)
  const [modalImage, setModalImage] = useState(false)
  // ***************************** pagination ******************************************
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6)

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

  // ============================ pagination ====================================
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = itemsFilterData ? itemsFilterData.slice(indexOfFirstUser, indexOfLastUser) : null;
  const totalPages = Math.ceil(itemsFilterData ? itemsFilterData.length / usersPerPage : 0);
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
      {/* start */}
      <div className="max-w-[1100px] mx-auto mt-16">
        <DetailsFilterMenu itemsCount={itemsCount} />
      </div>
      <div className="max-w-[1350px] mx-auto my-16 flex justify-start items-start flex-wrap">
        {currentUsers ?
          currentUsers.map(item => (
            <div className="p-7 w-1/3">
              <Cards
                item={item}
                setItemsFilterData={setItemsFilterData}
                setModalImage={setModalImage}
                setdetailsOfficanvas={setdetailsOfficanvas}
              />
            </div>
          )) : (
            <div className="p-7 w-1/3">
              <Cards
                item={data}
                setItemsFilterData={setItemsFilterData}
                setModalImage={setModalImage}
                setdetailsOfficanvas={setdetailsOfficanvas}
              />
            </div>
          )}
      </div>
      {currentUsers && (
        <div className="mb-8">
          <Pagination
            paginate={paginate}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      )}
      {/* end */}
      <div className="max-w-[1350px] mx-auto my-16">
        {itemsGallery && <Gallery imgData={itemsGallery} />}
      </div>
      <InfoModal detailsOfficanvas={detailsOfficanvas} modalImage={modalImage} setModalImage={setModalImage} />
    </div>
  )
}

export default Details