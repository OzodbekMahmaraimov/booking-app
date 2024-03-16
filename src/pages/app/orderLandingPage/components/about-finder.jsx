import React from 'react'

const AboutFinder = ({title, text}) => {
  return (
    <div>
        <h2 className='text-[2rem] tracking-wide font-bold text-orange-500'>{title}</h2>
        <p className='mt-10 w-[90%] mx-auto font-semibold opacity-80 leading-7'>{text}</p>
    </div>
  )
}

export default AboutFinder