import React from 'react'
import './bar4.css'
import js from './jscLogo.jpg'

const Bar4 = () => {
    return (
        <article className="bar4-main">
            <div className='bar4-main-div'></div>
            <h3 className='bar4-main-h3'>85%</h3>
            <img className='bar4-main-img' src={js} alt="js" />
        </article>
    )
}

export default Bar4