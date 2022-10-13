import React from 'react'
import './responsiveIpad.css'
import ipad from './responsive2.png'

const ResponsiveIpad = () => {
  return (
    <article className="responsive-tablet">
        <img className='responsive-tablet-img' src={ipad} alt="ipadimg" />
    </article>
  )
}

export default ResponsiveIpad