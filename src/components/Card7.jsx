import React from 'react'
import './card7.css'

const Card7 = ({ darkModeBtn }) => {
    return (
        <article className={darkModeBtn ? "card7 dark" : "card7"}>
            <h2 className='card7-h2'>PRESS A BUTTON </h2>
            <div className='card7-div'>
              <i className='bx bxs-down-arrow-square' ></i>  
            </div>
            
        </article>
    )
}

export default Card7