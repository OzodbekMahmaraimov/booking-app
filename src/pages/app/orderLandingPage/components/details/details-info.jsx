import React from 'react'

const DetailsInfo = ({ name, title, description }) => {
    return (
        <div className='absolute -top-24 w-full bg-[#F1E8D7] shadow-xl rounded-xl shadow-[#a9a299] py-10 px-24'>
            <h1
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                className='text-2xl font-bold tracking-wider text-black opacity-90 mb-5'>
                {name}
            </h1>
            <h3
                style={{ textShadow: '2px 2px 4px rgba(244, 106, 6, 0.8)' }}
                className='border-t-2 border-[#e9a87a] pt-5 ms-10 text-2xl font-bold tracking-wider text-[#F46A06]'>
                {title}
            </h3>
            <p
                style={{ textShadow: "0px 2px 8px 0px #00000040", fontFamily: 'serif' }}
                className='text-[1.1rem] uppercase font-semibold tracking-widest leading-8 ms-24 mt-5 mb-16'>
                {description}
            </p>
        </div>
    )
}

export default DetailsInfo