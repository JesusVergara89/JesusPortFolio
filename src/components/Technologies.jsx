import React from 'react'
import Buttton1 from './Buttton1'
import './technologies.css'
import Technologies1 from './Technologies1'
import Technologies2 from './Technologies2'
import Technologies3 from './Technologies3'

const Technologies = ({darkModeBtn}) => {
  return (
    <article className="technologies">
      <div className='technologies-grid-1'>
      <Technologies1 darkModeBtn={darkModeBtn}/>
      <Buttton1/>
      <Technologies2 darkModeBtn={darkModeBtn}/>
      <Buttton1/>
      <Technologies3 darkModeBtn={darkModeBtn} />
      </div>
    </article>
  )
}

export default Technologies