import React from 'react'
import './expe1.css'
import itsa1 from './itsa.png'

const Expe1 = ({darkModeBtn}) => {
  return (
    <article className="expe-1">
        <img className="expe-1-img" src={itsa1} alt="itsa" />
        <h3 className={darkModeBtn ? 'expe-1-h3 dark' : 'expe-1-h3'}>Academic assistant</h3>
    </article>
  )
}

export default Expe1