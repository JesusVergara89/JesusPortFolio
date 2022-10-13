import React from 'react'
import './bar2.css'
import react from './reactLogo.png'

const Bar2 = () => {
    return (
        <article className="bar2-main">
            <div className='bar2-main-div'></div>
            <h3 className='bar2-main-h3'>80%</h3>
            <img className='bar2-main-img' src={react} alt="react" />
        </article>
    )
}

export default Bar2