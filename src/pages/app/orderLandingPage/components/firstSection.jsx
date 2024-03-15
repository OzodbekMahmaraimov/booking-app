import React from 'react'
import Button from './button'
import img from '../../../../assets/landing-img/first-img.png'

const FirstSection = ({heading, headingTwo, text}) => {
    return (
        <div className='flex justify-between items-center w-full h-full border-b-2 border-black'>
            <div className='w-[40%]'>
                <h1 className='text-[2.7rem] leading-[3rem] font-bold tracking-wide'>
                    {heading}
                </h1>
                <p className='mt-7 w-[70%] leading-5 opacity-80'>
                    {text}
                </p>
                <h5 className='font-bold text-[1.5rem] mt-8 opacity-70 tracking-tight ms-5'>
                    {headingTwo}
                </h5>
                <div className='mt-10 text-center'>
                    <Button link='/map-page' name={"View on map"} />
                </div>
            </div>
            <div className='w-[60%] flex justify-center items-center'>
                <div className='bg-[#F1E8D7] overflow-hidden rounded-full w-[75%] h-[75%]'>
                    <img className='w-full h-full' src={img} alt="first img" />
                </div>
            </div>
        </div>
    )
}

export default FirstSection