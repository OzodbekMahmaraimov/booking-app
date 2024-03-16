import React, { useState } from "react"
import { Link } from "react-router-dom"
import ShoppingBasket from "../shopping-basket"

const DetailsFilterMenu = ({ itemsCount }) => {
    const [active, setActive] = useState({ id: 1 })

    const data = [
        { id: 1, category: 'all', name: 'All' },
        { id: 2, category: 'coffeDrinks', name: 'Coffee drinks' },
        { id: 3, category: 'mainDashes', name: 'Main dishes' },
        { id: 4, category: 'snacks', name: 'Snacks' },
        { id: 5, category: 'softDrinks', name: 'Soft drinks' },
        { id: 6, category: 'alcoholicDrinks', name: 'Alcoholic drinks' }
    ]
    const activeHandler = (id) => setActive(data.find(c => c.id === id))

    return (
        <div
            className={`bg-[#fbefd8] px-10 py-6 rounded-lg shadow-lg shadow-[8px 4px 4px 0px #00000040]
            flex justify-around items-center relative text-black font-bold text-[1.2rem]`}
        >
            <span className='absolute -right-4 -top-5'>
                <ShoppingBasket count={itemsCount} />
            </span>
            {data.map(item => (
                <Link
                    onClick={() => activeHandler(item.id)}
                    className={`${active.id === item.id ? 'text-[#F46A06]' : 'text-black'} 
                    hover:text-[#F46A06] duration-200`}>
                    <p>{item.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default DetailsFilterMenu