import React from 'react'
import EducationBackground from './EducationBackground'
import './educations.css'

const Education = ({ darkModeBtn }) => {
  return (
    <article className="education">
        <EducationBackground darkModeBtn={darkModeBtn} />
    </article>
  )
}

export default Education