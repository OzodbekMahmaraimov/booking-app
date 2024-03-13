import React from 'react'

function ImgCard({img, width}) {
  return (
    <div className={`gallary_card w-${width} overflow-hidden shadow-2xl`}>
        <img className="cards_img" src={img} alt="img"/>
    </div>
  )
}

export default ImgCard