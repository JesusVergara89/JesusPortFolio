import React from 'react'
import './card6.css'

const Card6 = ({ darkModeBtn }) => {
    return (
        <article className={darkModeBtn ? "card6 dark" : "card6"}>
            <i className='bx bxl-gmail' ></i>
            <h2 className='card6-h2'>EMAIL <br /> ME </h2>
            <a href="mailto:jesusmanuelv1989@gmail.com" target="_blank" rel="noopener noreferrer">Go to</a>
        </article>
    )
}

export default Card6