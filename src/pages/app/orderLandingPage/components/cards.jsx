import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Cards = ({ image, id, name }) => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#fbefd8] overflow-hidden rounded-3xl shadow-md shadow-slate-400
        h-96 w-full'>
            <div className='w-full h-[80%] overflow-hidden'>
                <img
                    className='w-full h-full object-cover hover:scale-110 duration-300'
                    src={image}
                    alt="card img" />
            </div>
            <h3
                onClick={() => {
                    sessionStorage.setItem('detailsId', JSON.stringify(id))
                    navigate(`${id ? `/details/${id.id}/${id.category}/${id.name}` : '/'}`)
                }}
                className='text-center w-[90%] mx-auto bg-white border border-slate-300 mt-4 hover:cursor-pointer py-1.5 rounded-xl shadow-md shadow-gray-400 font-bold tracking-wide text-[1.1rem]'>
                {name}
            </h3>
        </div>
    )
}

export default Cards