import React from 'react'
import phone from './responsive1.png'
import './responsiveIphone.css'

const ResponsiveIphone = () => {
  return (
    <article className="responsive-phone">
        <img className="responsive-phone-img" src={phone} alt="imgPhone" />
    </article>
  )
}

export default ResponsiveIphone