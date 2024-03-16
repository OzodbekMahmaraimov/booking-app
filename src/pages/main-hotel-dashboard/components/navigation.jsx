import React from 'react'
import { FaHome } from 'react-icons/fa'
import { useLocation, Link } from 'react-router-dom';

export const MainDashboardNavigation = () => {


  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="bg-orange-500 p-2">
      <ul className="flex text-white">
        <li className="flex items-center">
          <Link to="/" className="flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row">
            <FaHome size={30} />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={name} className="flex items-center">
              <span className="px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row">{name}</span>
            </li>
          ) : (
            <li key={name} className="flex items-center">
              <Link to={routeTo} className="flex items-center px-4 py-2 rounded-md text-sm font-medium gap-4 flex-row">
                {name}
              </Link>👉🏻
            </li>
          );
        })}
      </ul>
    </div>
  );
};

