import React from 'react'
import './expe4.css'
import pises from './pises.png'

const Expe4 = ({darkModeBtn}) => {
    return (
        <article className="expe-4">
            <img className="expe-4-img" src={pises} alt="pises" />
            <h3 className={darkModeBtn ? 'expe-4-h3 dark' : 'expe-4-h3'}>Javascript programmer with React</h3>
        </article>
    )
}

export default Expe4