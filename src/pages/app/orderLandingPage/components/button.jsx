import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ name, link }) => {
    return <Link to={link}><button className='landing-btn duration-200'>{name}</button></Link>
}

export default Button