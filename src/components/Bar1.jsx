import React from 'react'
import html from './htmlLogov1.jpg'
import './bar1.css'

const Bar1 = () => {
  return (
    <article className="bar-main">
        <div className='bar-main-div'></div>
        <h3 className='bar-main-h3'>90%</h3>
        <img className='bar-main-img' src={html} alt="html" />
    </article>
  )
}

export default Bar1