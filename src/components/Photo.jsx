import React from 'react'
import Buttton1 from './Buttton1'
import Iam from './Iam'
import Tech from './Tech'
import './photo.css'
import ResponsiveDesing from './ResponsiveDesing'
import FormSheetBest from './FormSheetBest'

const Photo = ({darkModeBtn}) => {
  return (
    <article className="Photo">
      <div className='Photo-div'>
        <Iam darkModeBtn={darkModeBtn} />
        <Buttton1 />
        <Tech darkModeBtn={darkModeBtn} />
        <Buttton1 />
      </div>
      <div className='Photo-div'>
        <ResponsiveDesing darkModeBtn={darkModeBtn} />
        <Buttton1 />
        <FormSheetBest darkModeBtn={darkModeBtn} />
      </div>
    </article>
  )
}

export default Photo