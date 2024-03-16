import React from 'react';
// Assuming you have the images in your project's 'src/assets' folder or similar
import homeIcon from "./../../../../../assets/images/Vector (1).png";
import blackLine from "./../../../../../assets/images/Line 10.png";

function HomeNavigation() {
  return (
    <div className="flex mt-5">
      <div className="flex w-full items-center gap-1">
        <div>
          <img src={homeIcon} alt="home icon" />
        </div>
        <div>
          <img src={blackLine} alt="separator line" />
        </div>
        <div>
          <p className="text-black cursor-pointer text-xl">Home</p>
        </div>
      </div>
    </div>
  );
}

export default HomeNavigation;
