import React from 'react'
import './bar12.css'
import sheet from './sheetLogo.png'

const Bar12 = () => {
    return (
        <article className="bar12-main">
            <div className='bar12-main-div'></div>
            <h3 className='bar12-main-h3'>75%</h3>
            <img className='bar12-main-img' src={sheet} alt="sheet" />
        </article>
    )
}

export default Bar12