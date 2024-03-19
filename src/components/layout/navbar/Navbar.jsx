// styles
import { styles } from '../../../util/style'

// icons
import { FaHome } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { FaList } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => setNavbar(!navbar);

  return (
    <>
      <section className='w-full fixed z-10 bg-white shadow-md'>
        {/* header */}
        <header className={`${styles.container} px-5 py-8 md:px-0 flex items-center justify-between`}>
          {/* logo */}
          <Link to="/" className='text-4xl cursor-pointer'>HFfinder</Link>
          {/* / logo */}

          {/* navbar */}
          <nav className='text-[#F46A06] hidden md:block px-2 lg:px-0'>
            <ul className='flex gap-8 lg:gap-12 font-semibold'>
              <Link to="/" className='flex items-center text-xl gap-2 cursor-pointer'>
                <FaHome color='black' />
                Home
              </Link>
              <li className='flex items-center text-xl gap-2 cursor-pointer'>
                <FaBowlFood color='black' />
                Create facility
              </li>
              <li className='flex items-center text-xl gap-2 cursor-pointer'>
                <IoCall color='black' />
                ContactUs
              </li>
              <li className='flex items-center text-xl gap-2 cursor-pointer'>
                <FiLogIn color='black' />
                Login
              </li>
            </ul>
          </nav>
          {/* / navbar */}
          {/* navbar logo for sm */}
          <FaList onClick={toggleNavbar} fontSize={30} className='block md:hidden cursor-pointer' />
          {/* / navbar logo for sm */}
        </header>


        {/* navbar sm */}
        <nav className={`text-[#F46A06] duration-200 ${navbar ? "h-[230px]" : "h-0"} overflow-hidden block md:hidden px-2 lg:px-0`}>
          <ul className='flex text-center flex-col gap-8 lg:gap-12 font-semibold'>
            <li className='flex items-center text-xl gap-2 cursor-pointer'>
              <FaHome color='black' />
              Home
            </li>
            <li className='flex items-center text-xl gap-2 cursor-pointer'>
              <FaBowlFood color='black' />
              Create facility
            </li>
            <li className='flex items-center text-xl gap-2 cursor-pointer'>
              <IoCall color='black' />
              ContactUs
            </li>
            <li className='flex items-center text-xl gap-2 cursor-pointer'>
              <FiLogIn color='black' />
              Login
            </li>
          </ul>
        </nav>
        {/* / navbar sm */}


      </section>
    </>
  )
}

export default Navbar