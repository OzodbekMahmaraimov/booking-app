import React from 'react'
import { Link } from 'react-router-dom';

const BookingMenu = ({ leftText, rightText, button, className, leftLink, rightLink }) => {
    let style = {
        pStyle: 'font-bold text-[1.2rem] tracking-tight'
    }

    return (
        <div className='flex justify-between items-center my-4'>
            <div>
                {leftLink === null
                    ? <p className={`${style.pStyle}`}>{leftText}</p>
                    : <Link to={leftLink}><p className={`${style.pStyle}`}>{leftText}</p></Link>
                }
            </div>
            <div>
                {rightLink === null
                    ? <span className={`${style.pStyle} ${className}`}>{rightText}</span>
                    : <Link to={rightLink}><span className={`${style.pStyle} ${className}`}>{rightText}</span></Link>
                }
                <span>{button}</span>
            </div>
        </div>
    )
}

export default BookingMenu