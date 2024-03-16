import React from 'react';

// Assuming `icon` is a React component, for example, an SVG.
const MainHotelDashboardButton = ({ width, height, icon, children }) => {
  return (
    <button
      className={`bg-orange-500 text-white font-bold rounded ${width} ${height} flex items-center justify-center px-3`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default MainHotelDashboardButton;