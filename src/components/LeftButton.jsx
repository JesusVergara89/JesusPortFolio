import React from 'react'
import './leftBtn.css'

const LeftButton = ({leftFucntion}) => {
  return (
    <article className="left-btn">
        <button onClick={leftFucntion} className='left-btn-btn'>
        <i className='bx bx-chevrons-left'></i>
        </button>
    </article>
  )
}

export default LeftButton