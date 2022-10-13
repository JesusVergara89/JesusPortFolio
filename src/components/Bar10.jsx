import React from 'react'
import './bar10.css'
import project from './axiosLogo.png'

const Bar10 = () => {
    return (
        <article className="bar10-main">
            <div className='bar10-main-div'></div>
            <h3 className='bar10-main-h3'>90%</h3>
            <img className='bar10-main-img' src={project} alt="project" />
        </article>
    )
}

export default Bar10