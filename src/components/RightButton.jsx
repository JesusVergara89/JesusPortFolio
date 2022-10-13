import React from 'react'
import './rightBtn.css'

const RightButton = ({rightFucntion}) => {
  return (
    <article className="right-btn">
        <button onClick={rightFucntion} className='right-btn-btn'>
        <i className='bx bx-chevrons-right'></i>
        </button>
    </article>
  )
}

export default RightButton