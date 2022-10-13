import React from 'react'
import read from './read.png'
import './read.css'

const Read = ({darkModeBtn}) => {
  return (
    <article className="read">
        <img className="read-img" src={read} alt="imgread" />
        <h3 className={darkModeBtn ? 'read-h3 dark' : 'read-h3'}>Read</h3>
    </article>
  )
}

export default Read