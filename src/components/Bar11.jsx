import React from 'react'
import './bar11.css'
import word from './WordpressLogo.png'

const Bar11 = () => {
    return (
        <article className="bar11-main">
            <div className='bar11-main-div'></div>
            <h3 className='bar11-main-h3'>75%</h3>
            <img className='bar11-main-img' src={word} alt="word" />
        </article>
    )
}

export default Bar11