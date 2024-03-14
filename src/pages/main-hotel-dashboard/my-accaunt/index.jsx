import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaImage, FaLock, FaUtensils, FaEdit } from 'react-icons/fa';

const InputGroup = ({ id, type, name, value, handleChange, placeholder, icon }) => {
    return (
        <div className="flex items-center pl-4 pr-2 py-2 bg-white rounded-md shadow-md">
            <div className="text-orange-500 text-lg">
                {icon}
            </div>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full p-2 pl-4 bg-white rounded-md outline-none text-gray-700"
                required
            />
            <label htmlFor={id} className="text-orange-500 cursor-pointer">
                <FaEdit />
            </label>
        </div>
    );
};

const MainHotelMyAccount = () => {
    const [formData, setFormData] = useState({
        managerName: '',
        managerPhone: '',
        managerEmail: '',
        password: '',
        restaurantName: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit form data
    };

    return (
        <div className='w-full p-3 bg-orange-100 rounded-md'>
            <div className="max-w-full mx-auto my-10 p-6 bg-white  rounded-md shadow-md">
                <h2 className="text-xl font-semibold text-center text-orange-700 mb-6">Manage your account</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-y-3'>
                    <InputGroup
                        id="managerName"
                        type="text"
                        name="managerName"
                        value={formData.managerName}
                        handleChange={handleChange}
                        placeholder="Manager Name"
                        icon={<FaUser />}
                    />

                    {/* Repeat for other input groups */}
                    <InputGroup
                        id="managerPhone"
                        type="tel"
                        name="managerPhone"
                        value={formData.managerPhone}
                        handleChange={handleChange}
                        placeholder="Manager Phone number"
                        icon={<FaPhone />}
                    />

                    <InputGroup
                        id="managerPhone"
                        type="tel"
                        name="managerPhone"
                        value={formData.managerPhone}
                        handleChange={handleChange}
                        placeholder="Manager Phone number"
                        icon={<FaPhone />}
                    />

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full p-3 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-200"
                        >
                            Update your account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};





export default MainHotelMyAccount;