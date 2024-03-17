import React, { useState } from 'react';
import { Drawer } from 'antd';
const InfoModal = ({ modalImage, setModalImage, detailsOfficanvas }) => {
    const [placement, setPlacement] = useState('right');
    console.log(detailsOfficanvas);
    return (
        <>{modalImage && (
            <Drawer
                title={`Order Items - ${detailsOfficanvas.shoppingCount}`}
                placement={placement}
                width={600}
                onClose={() => setModalImage(false)}
                open={modalImage}
            >
                <div className='flex justify-between items-center'>
                    <div className='w-[40%] p-3'>
                        <img className='w-full h-full object-cover rounded-xl scale-110 hover:-mt-2 duration-200 hover:shadow-lg hover:shadow-gray-500' src={detailsOfficanvas.img} alt="img" />
                    </div>
                    <div className='w-[60%] p-3'>
                        <p className='text-sm font-medium leading-7'>{detailsOfficanvas.description}</p>
                        <p className='text-[1.5rem] mt-5 text-orange-500 tracking-wider font-semibold'>{detailsOfficanvas.btn1}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-y-2 border-gray-400 py-4 mt-8'>
                    <p className='text-[1.5rem] tracking-wider font-medium text-slate-700'>SUB TOTAL:</p>
                    <p className='text-[1.5rem] text-orange-500 tracking-wider font-semibold'>{detailsOfficanvas.btn1}</p>
                </div>
                <button className='mt-5 border-2 border-gray-400 rounded-md py-2 px-7 font-semibold tracking-wider text-[1.1rem] bg-white hover:bg-orange-500 hover:text-white duration-200 hover:shadow-md hover:shadow-gray-500'>Checkout</button>
            </Drawer>
        )}</>
    );
};
export default InfoModal;