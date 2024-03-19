import React, { useEffect, useState } from 'react'
import { vector } from '../../assets/loginsignUp/const'
import { database } from './firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../../Api'
import { byId } from '../main-hotel-dashboard/components/api'
const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [managers, setManagers] = useState([]);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    try {
      const res = await axios.get(apiUrl + 'mainadmin');
      const managers = [...res.data.category.managers.hotelManagers, ...res.data.category.managers.restorantManagers, ...res.data.category.managers.superadmin];
      setManagers(managers);
    } catch (error) {
      console.error("So'rovda xato:", error);
    }
  }

  function login() {

    const email = byId("Email").value
    const password = byId("password").value

    let user = managers.find(manager => manager.email === email && manager.parol === password);

    if (user) {
      switch (user.role) {
        case "hotel_manager":
          navigate('/MainDashboard');
          break;
        case 'restorant_manager':
          navigate('/restourant-itemlist');
          break;
        case 'super_admin':
          setAdmin(true);
          
          break;
        default:
          alert("Noto'g'ri foydalanuvchi roli");
          break;
      }
    } else {
      alert("Email yoki parol noto'g'ri");
    }
  }

  return (
    <>
      <div
        className='w-full h-screen bg-[#F1E8D7] flex justify-start items-center flex-col  '>
        <p className='text-6xl mt-20 mb-5 font-semibold'>Sign in</p>
        <p className='text-lg mb-3'>Sign into your account to be able to make operations on the system</p>
        <div className=' w-[25%] mb-5'>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input name='email' id='Email' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="moise@gmail.com" required />
        </div>
        <div className=' w-[25%] mb-3'>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input type="password" id='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="Password" required />
        </div>
        <div className=' w-[25%] mb-3 '>
          <div className='flex gap-2 '>
            <input type="checkbox" className='cursor-pointer' />
            <label htmlFor="sasa" className='text-xs font-semibold'>Remember me</label>
            <a href='#' className='font-font-semibold text-xs ml-5 text-[#F46A06]'>Forgot password?</a>
          </div>
        </div>
        <div className=' w-[25%] mb-3'>
          <button
            onClick={login}
            className='bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg '>Login</button>
        </div>
        {admin &&
          <div className=' w-[25%] mb-3'>
            <p>qaysi dashboardga borishni tanlang</p>
            <div className='px-3 mt-4 flex bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg '>
              <Link to="/MainDashboard">
                hotel dashboard
              </Link>

            </div>
            <div className='px-3 mt-3 flex bg-[#F46A06] hover:bg-[#f46906ee] outline-none duration-200 w-full py-[0.5rem] text-white font-normal rounded-md shadow-lg '>

              <Link to="/restourant-itemlist">
                restorant dashboard
              </Link>
            </div>
          </div>}
        {!admin &&
          <div className='w-[25%] mb-[6.1rem]'>
            <p>Don't have an account?
              <Link to='/signUp' className='font-font-semibold text-xs ml-5 text-[#F46A06]'>
                Register Now
              </Link>
            </p>
          </div>}
        <img src={vector} className='w-full' alt="Image" />
      </div>
    </>

  )
}

export default Login
