import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ image, id, name, detailsLink }) => {
    return (
        <div className='bg-[#fbefd8] overflow-hidden rounded-3xl shadow-md shadow-slate-400
        h-96 w-full'>
            <div className='w-full h-[80%] overflow-hidden'>
                <img
                    className='w-full h-full object-cover hover:scale-110 duration-300'
                    src={image}
                    alt="card img" />
            </div>
            <Link to={detailsLink} onClick={() => {
                sessionStorage.setItem('detailsId', id)
            }}>
                <h3 className='text-center w-[90%] mx-auto bg-white border border-slate-300 mt-4
                py-1.5 rounded-xl shadow-md shadow-gray-400 font-bold tracking-wide text-[1.1rem]'>
                    {name}
                </h3>
            </Link>
        </div>
    )
}

export default Cards