import React from 'react'
import './downloadcs.css'

const DownloadCV = ({darkModeBtn}) => {
  return (
    <article className="download-cv">
      {darkModeBtn ?
      <i className='bx bx-cloud-download dark'></i>
      :
      <i className='bx bx-cloud-download'></i>
      }
        <button className='download-cv-btn'><a href="https://drive.google.com/file/d/1mvimEkg1PAv2fa77XCDD_3rxnYzCvzqU/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <span className={darkModeBtn ? 'download-span dark' : 'download-span'}>Curriculum Vitae</span></a></button>
    </article>
  )
}

export default DownloadCV