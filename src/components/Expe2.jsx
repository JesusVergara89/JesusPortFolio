import React from 'react'
import './expe2.css'
import sykes from './sykes.png'

const Expe2 = ({darkModeBtn}) => {
    return (
        <article className="expe-2">
            <img className="expe-2-img" src={sykes} alt="sykes" />
            <h3 className={darkModeBtn ? 'expe-2-h3 dark' : 'expe-2-h3'}>Bilingual agent</h3>
        </article>
    )
}

export default Expe2