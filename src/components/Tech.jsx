import React from 'react'
import Logos from './Logos'
import './tech.css'

const Tech = ({ darkModeBtn }) => {
    return (
        <article className={darkModeBtn ? 'tech dark' : 'tech'}>
            <h2 className='tech-title'>
                These are some of the technologies I work with:
            </h2>
            <Logos />
        </article>
    )
}

export default Tech