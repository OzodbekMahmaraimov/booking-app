import Button from "./button"

const ReservationRejection = () => {
    return (
        <div className="max-w-[1000px] mx-auto my-16 py-16 px-32 rounded-xl shadow-lg shadow-gray-400">
            <p className='text-center font-semibold text-[2.5rem] leading-[3.5rem] tracking-wide'>
                Thank you for booking <br /> 
                with us you will get call in <br />
                five minutes before the<br /> 
                taxi recheas you.
            </p>
            <div className="mt-20 text-center">
                <button
                    className="bg-[#F46A06] rounded-[5px] shadow-[0px 4px 4px 0px #00000040] 
                    hover:shadow-[0px 4px 4px 0px #0000006b] hover:bg-[#f68738] duration-200
                    text-white text-[20px] font-bold px-16 py-2.5">
                    Remember you can cancel anytime
                </button>
            </div>
            <div className="mt-20 text-center">
                <Button link='' name='Ok' />
            </div>
        </div>
    )
}

export default ReservationRejection