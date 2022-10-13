import React from 'react'
import './bar8.css'
import router from './reactRouterLogo.png'

const Bar8 = () => {
    return (
        <article className="bar8-main">
            <div className='bar8-main-div'></div>
            <h3 className='bar8-main-h3'>90%</h3>
            <img className='bar8-main-img' src={router} alt="router" />
        </article>
    )
}

export default Bar8