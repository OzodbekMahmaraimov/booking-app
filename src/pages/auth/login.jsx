import React, { useEffect, useState } from 'react'
import { vector } from '../../assets/loginsignUp/const'
import { database } from './firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../../Api'
import { byId } from '../main-hotel-dashboard/components/api'
const Login = () => {
  const [emailVal, setEmailVal] = useState(null)
  const [data, setdata] = useState({})
  const [managers, setManagers] = useState([])
  const navigate = useNavigate()
  const [admin, setAdmin] = useState(false)





  useEffect(() => {
    getAllData()
  }, [])

  async function getAllData() {
    try {
      const res = await axios.get(apiUrl + 'mainadmin');
      // Ma'lumotlarni saqlash
      setdata(res.data);

      // Oldingi `managers` ro'yxatini yangilangan ma'lumotlar bilan kengaytirish
      const hotelManagers = [...res.data.category.managers.hotelManagers];
      const restorantManagers = [...res.data.category.managers.restorantManagers]
      const superadmin = [...res.data.category.managers.superadmin]
      setManagers([...hotelManagers, ...restorantManagers, ...superadmin]);

      console.log(managers);
    } catch (error) {
      console.error("So'rovda xato:", error);
    }
  }


  function login() {
    let email = byId("Email").value
    let password = byId("password").value

    if (email && password) {
      managers.map((item) => {
        if (item.email == email && item.parol == password) {
          switch (item.role) {
            case "hotel_manager":
              navigate('/MainDashboard')
              break;
            case 'restorant_manager':
              navigate('/restourant-itemlist')
              break
            case 'super_admin':
              setAdmin(true)
              break
            default:
              break;
          }
        } else {
          alert("code yoki parol notugri")
        }
      });

      // const pathnames = location.pathname = 
    } else {
      alert("pleace fil all inputs")
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
