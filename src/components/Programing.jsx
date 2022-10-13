import React from 'react'
import program from './program.png'
import './programing.css'

const Programing = ({darkModeBtn}) => {
  return (
    <article className="program">
        <img className="program-img" src={program} alt="imgprogram" />
        <h3 className={darkModeBtn ? 'program-h3 dark' : 'program-h3'}>Programming</h3>
    </article>
  )
}

export default Programing