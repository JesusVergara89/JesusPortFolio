import React from 'react'
import teach from './teach.png'
import './teach.css'

const Teach = ({darkModeBtn}) => {
  return (
    <article className="teach">
        <img className="teach-img" src={teach} alt="imgteach" />
        <h3 className={darkModeBtn ? 'teach-h3 dark' : 'teach-h3'}>Teach</h3>
    </article>
  )
}

export default Teach