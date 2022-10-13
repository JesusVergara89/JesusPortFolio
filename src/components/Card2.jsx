import React from 'react'
import './card2.css'

const Card2 = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "card2 dark" : "card2"}>
            <i className='bx bxl-whatsapp-square' ></i>
            <h2 className='card2-h2'>WHATSAPP <br /> ME </h2>
            <a href="https://wa.me/+573222117823?text=¡Estoy+interesado!" target="_blank" rel="noopener noreferrer">Go to</a>
        </article>
    )
}

export default Card2