import React from 'react'
import Bar5 from './Bar5'
import Bar6 from './Bar6'
import Bar7 from './Bar7'
import Bar8 from './Bar8'
import './technologies2.css'

const Technologies2 = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "technologies2-main dark" : "technologies2-main"}>
            <h2 className='technologies2-h2'>REDUX</h2>
            <Bar5/>            
            <h2 className='technologies2-h2'>GITHUB</h2>
            <Bar6/>            
            <h2 className='technologies2-h2'>GIT</h2>
            <Bar7/>
            <h2 className='technologies2-h2'>ROUTER DOM</h2>
            <Bar8/>
        </article>
    )
}

export default Technologies2