import React from 'react'

const DetailsBtn = ({ name, setModalImage, onClick }) => {
    return <button
        onClick={() => {
            setModalImage && setModalImage(true);
            onClick && onClick();
        }} // Adjusted conditional rendering
        className='bg-[#F46A06] py-1.5 px-5 rounded-md text-white font-bold shadow-md 
    shadow-[#f469067c] hover:bg-[#f38d44] duration-300'>
        {name}
    </button>



}

export default DetailsBtn
