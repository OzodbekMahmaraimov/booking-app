import React from "react"
import { Link } from "react-router-dom"
import ShoppingBasket from "./shopping-basket"

const FilterMenu = ({ activeClassAll, activeClassHotels, activeClassRestaurants, activeClassCoffee }) => {
    return (
        <div
            className={`bg-[#fbefd8] px-10 py-6 rounded-lg shadow-lg shadow-[8px 4px 4px 0px #00000040]
            flex justify-around items-center relative text-black font-bold text-[1.2rem]`}
        >
            <span className='absolute -right-4 -top-5'>
                <ShoppingBasket count={0} />
            </span>
            <Link
                to='/'
                className={`${activeClassAll} hover:text-[#F46A06] duration-200`}>
                <p>All</p>
            </Link>
            <Link
                to='/order-landing page/hotels'
                className={`${activeClassHotels} hover:text-[#F46A06] duration-200`}>
                <p>Hotels</p>
            </Link>
            <Link
                to='/order-landing page/restuarant'
                className={`${activeClassRestaurants} hover:text-[#F46A06] duration-200`}>
                <p>Restaurants</p>
            </Link>
            <Link
                to='/order-landing page/cafe'
                className={`${activeClassCoffee} hover:text-[#F46A06] duration-200`}>
                <p>Coffee shops</p>
            </Link>
        </div>
    )
}

export default FilterMenu