import React, { useState } from "react"
import { Link } from "react-router-dom"
import ShoppingBasket from "./shopping-basket"

const FilterMenu = ({ filterHandler, activeClassAll, activeClassHotels, activeClassRestaurants, activeClassCoffee }) => {
    const [active, setActive] = useState({ id: 1 })

    const data = [
        { id: 1, categoryName: 'all', name: 'All' },
        { id: 2, categoryName: 'hotel', name: 'Hotels' },
        { id: 3, categoryName: 'restuarant', name: 'Restaurants' },
        { id: 4, categoryName: 'cafe', name: 'Coffee shops' }
    ]
    const activeHandler = (id) => setActive(data.find(c => c.id === id))

    return (
        <div
            className={`bg-[#fbefd8] px-10 py-6 rounded-lg shadow-lg shadow-[8px 4px 4px 0px #00000040]
            flex justify-around items-center relative text-black font-bold text-[1.2rem]`}
        >
            <span className='absolute -right-4 -top-5'>
                <ShoppingBasket count={0} />
            </span>
            {data.map(item => (
                <Link
                    onClick={() => {
                        activeHandler(item.id)
                        filterHandler(item.categoryName)
                    }}
                    className={`${active.id === item.id ? 'text-[#F46A06]' : 'text-black'} 
                    hover:text-[#F46A06] duration-200`}>
                    <p>{item.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default FilterMenu