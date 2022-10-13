import React from 'react'
import './bar3.css'
import css from './cssLogo.svg'

const Bar3 = () => {
    return (
        <article className="bar3-main">
            <div className='bar3-main-div'></div>
            <h3 className='bar3-main-h3'>85%</h3>
            <img className='bar3-main-img' src={css} alt="css" />
        </article>
    )
}

export default Bar3