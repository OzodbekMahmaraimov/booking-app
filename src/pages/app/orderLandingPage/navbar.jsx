import { FaList } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navdata }) => {
    const [navbar, setNavbar] = useState(false);
    const toggleNavbar = () => setNavbar(!navbar);

    return (
        <section className='w-full fixed z-10 bg-white shadow-md'>
            <header className={`max-w-[1200px] mx-auto px-5 py-6 md:px-0 flex items-center justify-between`}>
                <h1 className='text-4xl'><Link>HFfinder</Link></h1>
                <nav className='text-[#F46A06] hidden md:block px-2 lg:px-0'>
                    <ul className='flex gap-8 lg:gap-12 font-semibold'>
                        {navdata.map(item => (
                            <Link key={item.id}>
                                <li className='flex items-center text-xl gap-2'>
                                    {item.icon}
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>

                <FaList onClick={toggleNavbar} fontSize={30} className='block md:hidden cursor-pointer' />
            </header>

            {/* mobile nav */}
            <nav className={`text-[#F46A06] duration-200 ${navbar ? "h-[230px]" : "h-0"} overflow-hidden block md:hidden px-2 lg:px-0`}>
                <ul className='flex text-center flex-col gap-8 lg:gap-12 font-semibold'>
                    {navdata.map(item => (
                        <li className='flex items-center text-xl gap-2'>
                            {item.icon}
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Navbar
