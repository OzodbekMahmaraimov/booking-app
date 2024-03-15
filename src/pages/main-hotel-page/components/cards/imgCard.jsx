import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ImgCard({img, width}) {
  return (
    <div className={`gallary_card w-${width} overflow-hidden shadow-2xl`}>
      <LazyLoadImage className="cards_img" src={img} alt="img"/>
    </div>
  )
}

export default ImgCard