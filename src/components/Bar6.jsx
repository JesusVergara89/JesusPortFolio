import React from 'react'
import './bar6.css'
import github from './githubLogo.png'

const Bar6 = () => {
    return (
        <article className="bar6-main">
            <div className='bar6-main-div'></div>
            <h3 className='bar6-main-h3'>60%</h3>
            <img className='bar6-main-img' src={github} alt="github" />
        </article>
    )
}

export default Bar6