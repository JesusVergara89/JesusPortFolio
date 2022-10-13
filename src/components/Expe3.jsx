import React from 'react'
import './expe3.css'
import ises from './ises.jfif'

const Expe3 = ({darkModeBtn}) => {
    return (
        <article className="expe-3">
            <img className="expe-3-img" src={ises} alt="ises" />
            <h3 className={darkModeBtn ? 'expe-3-h3 dark' : 'expe-3-h3'}>Electromechanical draftsman</h3>
        </article>
    )
}

export default Expe3