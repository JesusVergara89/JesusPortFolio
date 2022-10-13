import React from 'react'
import './education3.css'
import academlo from './logo_academlo.png'

const Education3 = ({darkModeBtn}) => {
    return (
        <article className="education-3">
            <img className="education-3-img" src={academlo} alt="itsa" />
            <h3 className={darkModeBtn ? 'education-3-h3 dark' : 'education-3-h3'}>Full Stack Developer</h3>
        </article>
    )
}

export default Education3