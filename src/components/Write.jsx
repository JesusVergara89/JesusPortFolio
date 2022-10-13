import React from 'react'
import write from './writing.png'
import './write.css'

const Write = ({darkModeBtn}) => {
  return (
    <article className="write">
        <img className="write-img" src={write} alt="imgwrite" />
        <h3 className={darkModeBtn ? 'write-h3 dark' : 'write-h3'}>Write</h3>
    </article>
  )
}

export default Write