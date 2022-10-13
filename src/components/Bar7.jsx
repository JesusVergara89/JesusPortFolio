import React from 'react'
import './bar7.css'
import git from './gitLogo.png'

const Bar7 = () => {
    return (
        <article className="bar7-main">
            <div className='bar7-main-div'></div>
            <h3 className='bar7-main-h3'>65%</h3>
            <img className='bar7-main-img' src={git} alt="git" />
        </article>
    )
}

export default Bar7