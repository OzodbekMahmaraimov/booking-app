import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const InfoModal = ({ modalImage, setModalImage, cardId, count = 0 }) => {
    const [cardInfo, setCardInfo] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/orderLandingPage")
            .then((res) => {
                setCardInfo(res.data.mainOrder[cardId - 1])
            }).catch((err) => {
                console.log(err);
            })
    }, [cardId])

    const checkOut = (e) => {
        console.log(cardId);
        
        axios.post("http://localhost:3000/payment", {
            id: cardId - 1,
            name: cardInfo.name,
            order: count,
            category: cardInfo.detailsInfo[0].category,
        }).then((res) => {
            console.log(res.data);            
        })
    }

    return (
        <>
            {modalImage && (
                <Drawer
                    title={`Order Items - ${count}`}
                    width={600}
                    onClose={() => setModalImage(false)}
                    open={modalImage}
                >
                    {cardInfo && ( // Check if cardInfo is not null
                        <div className='flex justify-between items-center'>
                            <div className='w-[40%] p-3'>
                                {cardInfo.img && (
                                    <LazyLoadImage
                                        className='w-full h-full object-cover rounded-xl scale-110 hover:-mt-2 duration-200 hover:shadow-lg hover:shadow-gray-500'
                                        src={cardInfo.img}
                                        alt="img"
                                        effect='blur'
                                    />
                                )}
                            </div>
                            <div className='w-[60%] p-3'>
                                <p className='text-sm font-medium leading-7'>{cardInfo.description}</p>
                                <p className='text-[1.5rem] mt-5 text-orange-500 tracking-wider font-semibold'>{cardInfo.name}</p>
                            </div>
                        </div>
                    )}
                    {cardInfo && ( 
                        <div className='flex justify-between items-center border-y-2 border-gray-400 py-4 mt-8'>
                            <p className='text-[1.5rem] tracking-wider font-medium text-slate-700'>SUB TOTAL:</p>
                            <p className='text-[1.5rem] text-orange-500 tracking-wider font-semibold'>{parseInt(cardInfo.detailsInfo[0].btn1) * (count ? count : 1)}  RWF</p>
                        </div>
                    )}
                    <button
                        onClick={checkOut}
                        type="button"
                        className='mt-5 border-2 border-gray-400 rounded-md py-2 px-7 font-semibold tracking-wider text-[1.1rem] bg-white hover:bg-orange-500 hover:text-white duration-200 hover:shadow-md hover:shadow-gray-500'
                    >
                        Checkout
                    </button>

                </Drawer>
            )}
        </>
    );
};

export default InfoModal;
