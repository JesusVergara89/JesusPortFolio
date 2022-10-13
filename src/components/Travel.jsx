import React from 'react'
import travel from './travel.png'
import './travel.css'

const Travel = ({darkModeBtn}) => {
  return (
    <article className="travel">
        <img className="travel-img" src={travel} alt="imgtravel" />
        <h3 className={darkModeBtn ? 'travel-h3 dark' : 'travel-h3'}>Travel</h3>
    </article>
  )
}

export default Travel