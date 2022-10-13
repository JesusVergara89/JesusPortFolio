import React from 'react'
import './bar9.css'
import project from './projectLogo.png'

const Bar9 = () => {
    return (
        <article className="bar9-main">
            <div className='bar9-main-div'></div>
            <h3 className='bar9-main-h3'>80%</h3>
            <img className='bar9-main-img' src={project} alt="project" />
        </article>
    )
}

export default Bar9