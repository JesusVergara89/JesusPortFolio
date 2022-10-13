import React from 'react'
import './education1.css'
import itsa from './itsa.png'

const Education1 = ({darkModeBtn}) => {
  return (
    <article className="education-1">
        <img className="education-1-img" src={itsa} alt="itsa" />
        <h3 className={darkModeBtn ? 'education-1-h3 dark' : 'education-1-h3'}>Associate degree in electromechanical <br /> Mechatronics Engineering <br /> Diploma in installation of PV systems. </h3>
    </article>
  )
}

export default Education1