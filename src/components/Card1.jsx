import React from 'react'
import './card1.css'

const Card1 = ({darkModeBtn}) => {
  return (
    <article className={darkModeBtn ? "card1 dark" : "card1"}>
        <i className='bx bxl-linkedin-square' ></i>
        <h2 className='card1-h2'>FROND <br /> END <br /> DEVELOPER</h2>
        <a href="https://www.linkedin.com/in/jesus-manuel-vergara-975799216/"  target="_blank" rel="noopener noreferrer">Go to</a>
    </article>
  )
}

export default Card1