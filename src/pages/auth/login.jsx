import React, { useEffect, useState } from 'react';
import { vector } from '../../assets/loginsignUp/const';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, message } from 'antd';
import { byId } from '../main-hotel-dashboard/components/api';
import { apiUrl } from '../../Api';


const Login = () => {
  const [managers, setManagers] = useState([]);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl + "admin/");
        console.log(res.data);
        const managers = [
          ...res.data.managers.hotelManagers,
          ...res.data.managers.restaurantManagers,
          ...res.data.managers.superadmin
        ];

        setManagers(managers);
        console.log(managers);
      } catch (error) {
        console.error("Ma'lumot kelmadi:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array means this effect runs only once, when the component mounts

  const showModal = () => {
    setIsModalOpen(true);
    message.success('Select ROLL');

  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function login() {
    const email = byId("Email").value;
    const password = byId("password").value;

    let user = managers.find(manager => manager.email === email && manager.password === password);
    
    console.log(user);

    if (user) {
      switch (user.role) {
        case "hotel_manager":
          navigate('/MainDashboard');
          break;
        case 'restaurant_manager':
          navigate('/restourant-itemlist');
          break;
        case 'super_admin':
          showModal();
          setAdmin(true);
          break;
        default:
          message.error('Incorrect user role');
          break;
      }
    } else {
      message.error('Email or password error');
    }
  }

  return (
    <>
      <div className='w-full h-screen bg-[#F1E8D7] flex justify-start items-center flex-col'>
        <p className='text-6xl mt-20 mb-5 font-semibold'>Sign in</p>
        <p className='text-lg mb-3'>Sign into your account to be able to make operations on the system</p>
        <div className='w-[25%] mb-5'>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input name='email' id='Email' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]" placeholder="moise@gmail.com" required />
        </div>
        <div className='w-[25%] mb-3'>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input type="password" id='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]" placeholder="Password" required />
        </div>
        <div className='w-[25%] mb-3'>
          <div className='flex gap-2'>
            <input type="checkbox" className='cursor-pointer' />
            <label htmlFor="sasa" className='text-xs font-semibold'>Remember me</label>
            <a href='#' className='font-font-semibold text-xs ml-5 text-[#F46A06]'>Forgot password?</a>
          </div>
        </div>
        <div className='w-[25%] mb-3'>
          <button onClick={login} className='bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg'>Login</button>
        </div>
        <Modal title="Select roll" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
          {admin &&

            <div className=' mb-3 flex items-center justify-between w-full gap-2'>
              <div className='px-3 mt-4 flex bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg'>
                <Link to="/MainDashboard">Hotel Dashboard</Link>
              </div>
              <div className='px-3 mt-3 flex bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg'>
                <Link to="/restourant-itemlist">Restaurant Dashboard</Link>
              </div>

            </div>}
        </Modal>
        {!admin &&
          <div className='w-[25%] mb-[6.1rem]'>
            <p>Don't have an account?
              <Link to='/signUp' className='font-font-semibold text-xs ml-5 text-[#F46A06]'>
                Register Now
              </Link>
            </p>
          </div>}
        <img src={vector} className='w-full absolute bottom-0' alt="Vector" />
      </div>
    </>
  );
}

export default Login;
