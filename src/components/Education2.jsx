import React from 'react'
import sena from './sena.png'
import './education2.css'

const Education2 = ({darkModeBtn}) => {
  return (
    <article className="education-2">
        <img className="education-2-img" src={sena} alt="itsa" />
        <h3 className={darkModeBtn ? 'education-2-h3 dark' : 'education-2-h3'}>C++ programming course</h3>
    </article>
  )
}

export default Education2