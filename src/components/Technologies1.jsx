import React from 'react'
import Bar1 from './Bar1'
import Bar2 from './Bar2'
import Bar3 from './Bar3'
import Bar4 from './Bar4'
import './technologies1.css'


const Technologies1 = ({ darkModeBtn }) => {
    return (
        <article className={darkModeBtn ? "technologies1-main dark" : "technologies1-main"}>
            <h2 className='technologies1-h2'>HTML</h2>
            <Bar1/>
            <h2 className='technologies1-h2'>REACT</h2>
            <Bar2/>
            <h2 className='technologies1-h2'>CSS</h2>
            <Bar3/>
            <h2 className='technologies1-h2'>JS</h2>
            <Bar4/>
        </article>
    )
}

export default Technologies1