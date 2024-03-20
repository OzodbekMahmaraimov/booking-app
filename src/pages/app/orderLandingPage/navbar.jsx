import { FaList } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navdata }) => {
    const [navbar, setNavbar] = useState(false);
    const [active, setActive] = useState({ name: "Home" });
    const toggleNavbar = () => setNavbar(!navbar);
    const activeHadler = name => setActive(navdata.find(n => n.name === name))

    return (
        <section className='w-full fixed z-10 bg-white shadow-md'>
            <header className={`max-w-[1200px] mx-auto px-5 py-6 md:px-0 flex items-center justify-between`}>
                <h1 className='text-4xl'><Link to="/">HFfinder</Link></h1>
                <nav className='hidden md:block px-2 lg:px-0'>
                    <ul className='flex gap-8 lg:gap-12 font-semibold'>
                        {navdata.map(item => (
                            <Link
                                to={item.to}
                                key={item.id}
                                onClick={() => activeHadler(item.name)}
                                className={`${item.isActive
                                    ? "text-slate-900"
                                    : ""} text-[#F46A06] hover:text-slate-800 duration-300`}>
                                <li className='flex items-center text-xl gap-2 relative group'>
                                    {item.icon}
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-bottom-right`}></span>
                                    {item.isActive ? <p className="h-0.5 bg-gray-500 w-full absolute -bottom-1"></p> : null}
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
                        <li key={item.id} className='flex items-center text-xl gap-2'>
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
