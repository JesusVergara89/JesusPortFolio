import React from 'react'
import './responsiveComputer.css'
import pcImg from './responsive3.png'

const ResponsiveComputer = () => {
  return (
    <article className="responsive-cumputer">
        <img className='responsive-cumputer-img' src={pcImg} alt="pcimg" />
    </article>
  )
}

export default ResponsiveComputer