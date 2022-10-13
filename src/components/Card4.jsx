import React from 'react'
import './card4.css'

const Card4 = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "card4 dark" : "card4"}>
            <i className='bx bxl-telegram' ></i>
            <h2 className='card4-h2'>TELEGRAM <br /> ME </h2>
            <a href="https://t.me/Jesusvergara89" target="_blank" rel="noopener noreferrer">Go to</a>
        </article>
    )
}

export default Card4