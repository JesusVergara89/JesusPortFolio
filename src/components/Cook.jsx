import React from 'react'
import './cook.css'
import cookImg from './cook.png'

const Cook = ({darkModeBtn}) => {
  return (
    <article className="cook">
        <img className="cook-img" src={cookImg} alt="imgcook" />
        <h3 className={darkModeBtn ? 'cook-h3 dark' : 'cook-h3'}>Cook</h3>
    </article>
  )
}

export default Cook