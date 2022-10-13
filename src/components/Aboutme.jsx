import React from 'react'
import './aboutme.css'
import Aboutmehistory from './Aboutmehistory'
import Buttton1 from './Buttton1'
import Hobies from './Hobies'
import Music from './Music'
import PersonalInformation from './PersonalInformation'
import ReadingNow from './ReadingNow'

const Aboutme = ({ darkModeBtn }) => {
  return (
    <article className="about-me">
      <div className='about-me-grid-1'>
        <Aboutmehistory darkModeBtn={darkModeBtn} />
        <Buttton1 />
        <PersonalInformation darkModeBtn={darkModeBtn} />
        <Buttton1 />
        <Hobies darkModeBtn={darkModeBtn} />
        <Buttton1 />
      </div>
      <div className='about-me-grid-2'>
        <Music darkModeBtn={darkModeBtn} />
        <Buttton1 />
        <ReadingNow darkModeBtn={darkModeBtn} />
      </div>
    </article>
  )
}

export default Aboutme