import React from 'react'
import './card3.css'

const Card3 = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "card3 dark" : "card3"}>
            <i className='bx bxl-twitter' ></i>
            <h2 className='card3-h2'>FOLLOW <br /> ME </h2>
            <a href="https://twitter.com/Jesus_Ver89" target="_blank" rel="noopener noreferrer">Go to</a>
        </article>
    )
}

export default Card3