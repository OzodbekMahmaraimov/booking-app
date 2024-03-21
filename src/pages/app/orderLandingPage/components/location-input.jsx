import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./button";
import { useNavigate } from 'react-router-dom'

const LocationInput = () => {
    const [dateVal, setdateVal] = useState('00:00')
    const startLocation = localStorage.getItem('startLocation')
    const endLocation = localStorage.getItem('endLocation')
    const navigate = useNavigate()

    return (
        <div className="max-w-[1350px] mx-auto my-16">
            <div className="w-[85%] mx-auto hover:cursor-pointer">
                <p className="font-semibold text-[1.1rem] opacity-80">Enter your location</p>
                <div onClick={() => {
                    navigate('/map-page/start')
                    }} className="mt-2 px-8 py-3 rounded-xl shadow-md shadow-[#F1E8D7] bg-[#F1E8D7] flex justify-start items-center">
                    <FaLocationDot color="#F46A06" fontSize="2.5rem" />
                    <p className="font-semibold text-[1.1rem] ms-3">
                        {startLocation ? startLocation : 'Enter your location'}
                    </p>
                </div>
            </div>
            <div className="w-[85%] mx-auto mt-14 hover:cursor-pointer">
                <p className="font-semibold text-[1.1rem] opacity-80">Enter destination location</p>
                <div onClick={() => {
                    navigate('/map-page/end')
                    }} className="mt-2 px-8 py-3 rounded-xl shadow-md shadow-[#F1E8D7] bg-[#F1E8D7] flex justify-start items-center">
                    <FaLocationDot color="#F46A06" fontSize="2.5rem" />
                    <p className="font-semibold text-[1.1rem] ms-3">
                        {endLocation ? endLocation : 'Enter destination location'}
                    </p>
                </div>
            </div>
            <div className="w-[85%] mx-auto hover:cursor-pointer mt-14">
                <p className="font-semibold text-[1.1rem] opacity-80">Enter destination time</p>
                <div className="mt-2 px-8 py-5 rounded-xl shadow-md shadow-[#F1E8D7] bg-[#F1E8D7] flex justify-between items-center">
                    <p className="font-semibold text-[1.1rem] opacity-80">
                        {dateVal}
                    </p>
                    <input
                        onChange={e => setdateVal(e.target.value)}
                        type="time"
                        className="hover:cursor-pointer bg-[#F1E8D7] focus:outline-0" />
                </div>
            </div>
            <div className="mt-20 text-center">
                <Button link='' name='Proceed' />
            </div>
        </div>
    )
}

export default LocationInput