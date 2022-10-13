import React from 'react'
import './personalInformation.css'
import myphoto from './myphoto1.png'
import myphoto1 from './Myphoto.png'

const PersonalInformation = ({ darkModeBtn }) => {
  return (
    <article className="persona-info">
      <h2 className={darkModeBtn ? 'persona-info-h2-up dark' : 'persona-info-h2-up'}>
        <span className={darkModeBtn ? 'persona-info-span-lateral-up dark' : 'persona-info-span-lateral-up'}>JE</span>S<span className={darkModeBtn ? 'persona-info-span-lateral-up dark' : 'persona-info-span-lateral-up'}>US</span>
      </h2>
      <img className='persona-info-myphoto' src={darkModeBtn ? myphoto1 : myphoto} alt="" />
      <h2 className={darkModeBtn ? 'persona-info-h2-down dark' : 'persona-info-h2-down'}>
       <span className={darkModeBtn ? 'persona-info-span-lateral-down dark' : 'persona-info-span-lateral-down'}>VER</span>G<span className={darkModeBtn ? 'persona-info-span-lateral-down dark' : 'persona-info-span-lateral-down'}>ARA</span> 
      </h2>
    </article>
  )
}

export default PersonalInformation