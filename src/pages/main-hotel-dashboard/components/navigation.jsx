import React from 'react'
import { FaHome } from 'react-icons/fa'

export const MainDashboardNavigation = () => {
  return (
    <div className='flex items-center gap-3' >
        <FaHome size={30}/>
        <p> home / nimadir</p>
    </div>
  )
}
