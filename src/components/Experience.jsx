import React from 'react'
import Buttton1 from './Buttton1'
import './experience.css'
import ExperienceBackground from './ExperienceBackground'
import SomeProjects from './SomeProjects'

const Experience = ({ darkModeBtn }) => {
  return (
    <article className="experience">
      <div className="experience-grid-1">
        <ExperienceBackground darkModeBtn={darkModeBtn} />
        <Buttton1 />
        <SomeProjects darkModeBtn={darkModeBtn} />
      </div>
    </article>
  )
}

export default Experience