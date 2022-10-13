import React from 'react'
import Bar10 from './Bar10'
import Bar11 from './Bar11'
import Bar12 from './Bar12'
import Bar9 from './Bar9'
import './technologies3.css'

const Technologies3 = ({darkModeBtn}) => {
  return (
    <article className={darkModeBtn ? "technologies3-main dark" : "technologies3-main"}>
            <h2 className='technologies3-h2'>PROJECT</h2>
            <Bar9/>           
            <h2 className='technologies3-h2'>AXIOS</h2>
            <Bar10/>           
            <h2 className='technologies3-h2'>WORDPRESS</h2>
            <Bar11/>
            <h2 className='technologies3-h2'>SHEET BEST</h2>
            <Bar12/>
        </article>
  )
}

export default Technologies3