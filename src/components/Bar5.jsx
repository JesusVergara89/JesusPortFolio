import React from 'react'
import './bar5.css'
import redux from './reduxLogo.svg'

const Bar5 = () => {
    return (
        <article className="bar5-main">
            <div className='bar5-main-div'></div>
            <h3 className='bar5-main-h3'>70%</h3>
            <img className='bar5-main-img' src={redux} alt="redux" />
        </article>
    )
}

export default Bar5