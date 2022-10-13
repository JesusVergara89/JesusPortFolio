import React from 'react'
import './card5.css'

const Card5 = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "card5 dark" : "card5"}>
            <i className='bx bxl-facebook-square' ></i>
            <h2 className='card5-h2'>FOLLOW <br /> ME </h2>
            <a href="https://www.facebook.com/jesusvergara1989TT" target="_blank" rel="noopener noreferrer">Go to</a>
        </article>
    )
}

export default Card5